App.helpers = (function(){
	var globals = App.globals, defaults = App.defaults;
	function includeIfStringElseExecute(item){
		if(!item){
			return;
		}
		if(item instanceof Array){
			for(var i = 0; i < item.length; i++){
				includeIfStringElseExecute(item[i]);
			}
		}
		else if(typeof item === 'function'){
			var items = item();
			if(items){
				includeIfStringElseExecute(items);
			}
		}
		else if(typeof item === 'string'){
			try{
				include(item);
			}
			catch(e){
				alert('failed to include ' + item.toString());
			}
		}
	}
	function createPageLinks(pageName, links){
		if(typeof Pages[pageName] === 'undefined'){
			Pages[pageName] = new SMF.UI.Page({
				onKeyPress: defaults.page.onKeyPress
			});
		}
		var page = Pages[pageName];
		page.clear();

		var lbl = new SMF.UI.Label({
			height : "100%",
			left: '3%',
			top: 0,
			width: '70%',
			fillColor: 'black',
			fontColor: 'orange',
			backgroundTransparent: false,
			touchEnabled: false
		});

		var img = new SMF.UI.Image({
			left: "80%",
			width: '20%',
			image: globals.APP_URL + "images/1426022080_icon-ios7-arrow-forward-128.png",
			changeAnimation: "fade",
			touchEnabled: false
		});

		var rBox = new SMF.UI.RepeatBox({
			width : "100%",
			height : "100%",
			left : 0,
			top : 0,
			dataSource : links,
			showScrollbar : true,
			enablePullDownToRefresh: true,
			enablePullUpToRefresh: true,
			onRowRender: function(e){
				var label = this.controls[0];
				label.text = e.rowData[0];
			},
			onSelectedItem: function(e){
				/*function includeIfStringElseExecute(item){
					if(item instanceof Array){
						for(var i = 0; i < item.length; i++){
							includeIfStringElseExecute(item[i]);
						}
					}
					else if(typeof item === 'function'){
						var items = item();
						if(items){
							includeIfStringElseExecute(items);
						}
					}
					else if(typeof item === 'string'){
						include(item);
					}
				}*/

				var lambdas = links[e.rowIndex].slice(1);
				includeIfStringElseExecute(lambdas);
				/*for(var i = 0; i < lambdas.length; i++){
					var item = lambdas[i];
					if(item instanceof Array){
						for(var j = 0; j < item.length; i++){
							includeIfStringElseExecute(item[i]);
						}
					}
					else if(typeof item === 'function'){
						var items = item();
						if(items){
							includeIfStringElseExecute(items);
						}
					}
					else if(typeof item === 'string'){
						include(item);
					}
				}*/
				/*
				for(var i = 0; i < lambdas.length; i++){
					var lambda = lambdas[i];
					if(typeof lambda === 'function'){
						lambda();
					}
					else if(typeof lambda === 'string'){
						include(lambda);	
					}
				}*/
			}
		});
		rBox.itemTemplate.height = "8%";
		rBox.itemTemplate.fillColor = "yellow";
		rBox.itemTemplate.add(lbl);
		rBox.itemTemplate.add(img);

		page.add(rBox);
		page.show();
		App.defaults.header(page, pageName);
	}
	function createPageScrollLinks(pageName, links, targetName){
		if(typeof Pages[pageName] === 'undefined'){
			Pages[pageName] = new SMF.UI.Page({
				onKeyPress: defaults.page.onKeyPress
			});
		}
		var page = Pages[pageName];
		page.clear();
		if(!targetName){
			targetName = 'ScrollView12';
		}
		var target = page[targetName] = new SMF.UI.ScrollView({
			top: "0%",
			left: "0%",
			width: "100%",
			height: "100%",
			contentHeight: "100%",
			contentWidth: "100%"
		});
		page.add(target);
		
		for(var i = 0; i < links.length; i++){
			var row = links[i];
			createPageUrlLoadTextButton(target, row[0], row[1]);
		}
		target.layoutType = SMF.UI.LayoutType.linear;
		target.orientation = SMF.UI.Orientation.vertical;
		target.autosize = true;
		page.onShow = function(){
			App.defaults.header(page, pageName);
			var tc = target.controls, len = tc.length;
			var last_control = tc[len - 1];
			target.contentHeight = last_control.top + last_control.height;
		}
		page.show();
	}
	function createPageLinksWithDefine(page, pageName, links){
		var lbl = new SMF.UI.Label({
			height : "100%",
			left: '3%',
			top: 0,
			width: '70%',
			fillColor: 'black',
			fontColor: 'orange',
			backgroundTransparent: false,
			touchEnabled: false
		});

		var img = new SMF.UI.Image({
			left: "80%",
			width: '20%',
			image: globals.APP_URL + "images/1426022080_icon-ios7-arrow-forward-128.png",
			changeAnimation: "fade",
			touchEnabled: false
		});

		var rBox = new SMF.UI.RepeatBox({
			width : "100%",
			height : "100%",
			left : 0,
			top : 0,
			dataSource : links,
			showScrollbar : true,
			enablePullDownToRefresh: true,
			enablePullUpToRefresh: true,
			onRowRender: function(e){
				var label = this.controls[0];
				label.text = e.rowData[0];
			},
			onSelectedItem: function(e){
				var lambdas = links[e.rowIndex].slice(1);
				includeIfStringElseExecute(lambdas);
			},
			itemTemplate: {
				height: "8%",
				fillColor: "yellow"
			}
		});
		rBox.itemTemplate.add(lbl);
		rBox.itemTemplate.add(img);

		page.add(rBox);
		page.onShow = function(){
			App.defaults.header(page, pageName);
		};
	}
	function createPageUrlLoadTextButton(parent, txt, url){
		var txtBtn = new SMF.UI.TextButton({
			text: txt,
			width: '97%',
			height: '50dp',
			onPressed: function(){
				if(typeof url === 'function'){
					url();
				}
				else if(typeof url === 'string'){
					include(url);	
				}
			}
		});
		parent.add(txtBtn);
	}
	function displayByLimit(controls, limit){
		limit = limit || 10;
		if(!(controls instanceof Array)){
			controls = Object.keys(controls);
		}
		var stack = [];
		for(var i = 0; i < controls.length; i++){
			stack.push(controls[i]);
			if((i + 1) % limit === 0){
				alert(stack.join(', '));
				stack = [];
			}
		}
		alert(stack.join(', '));
	}
	function displayTypeAndNameOfControls(controls, start){
		var len = Pages.Page1.ScrollView.controls.length;
		start = start || 0;
		for(var i = start; i < len; i++){
			var ctrl = Pages.Page1.ScrollView.controls[i];
			alert(ctrl.type + ', ' + ctrl.name);
		}
	}
	function refreshMainLinks(){
		var pages_url = globals.APP_URL + 'pages/', libs_url = globals.APP_URL + 'libs/', links = [
			['Refresh main.js', globals.APP_URL + 'main.js'],
			['Set C9', function(){
				globals.environment.setServer('c9.current');
				refreshMainLinks();
			}],
			['Set Emulator', function(){
				globals.environment.setServer('emulator', 3000);
				refreshMainLinks();
			}],
			['Set Genymotion', function(){
				globals.environment.setServer('genymotion', 3000);
				refreshMainLinks();
			}],
			['Set Device @Work', function(){
				globals.environment.setServer('work', 3000);
				refreshMainLinks();
			}],
			['Set Device @Home', function(){
				globals.environment.setServer('home', 3000);
				refreshMainLinks();
			}],
			['Go To Links', pages_url + 'index.js']
		];
		if(typeof _ === 'undefined'){
			links.push(['Add Underscore', function(){
				load(libs_url + 'third-party/underscore-min.js');
				refreshMainLinks();
			}]);
		}
		if(typeof Backbone === 'undefined'){
			links.push(['Add Backbone', function(){
				load(libs_url + 'third-party/backbone-min.js');
				refreshMainLinks();
			}]);
		}
		createPageLinks('Page1', links);
	}
	function removeChildren(parent, start, stop){
		var end = stop || parent.controls.length;
		var begin = start || 0;
		for(var i = end; i > begin - 1; i--){
			parent.remove(parent.controls[i]);
		}
	}
	function txt_btn_back(parent, obj){
		if(!obj){
			obj = parent;
			parent = false;
		}
		var btn = new SMF.UI.TextButton(
			_.extend({
				text: "Back",
				onPressed: function(e) {
					Pages.back();
				}
			}, obj)
		);
		if(parent){
			parent.add(btn);	
		}
		return btn;
	}
	function updateScripts(){
		var app_url_cached = globals.APP_URL;
		var apps_url = app_url_cached + 'app/';
		alert('updateScripts');
		include(app_url_cached + 'libs/router.js');
		//App.router = new Router();

		App.router.include(apps_url + 'App.globals.js');
		App.router.include(apps_url + 'App.defaults.js');
		if(Device.deviceOS === 'Android'){
			App.router.include(apps_url + 'App.defaults.android.js');
		}
		else{
			App.router.include(apps_url + 'App.defaults.iOS.js');
		}
		App.router.include(apps_url + 'App.helpers.js');
		App.router.include(apps_url + 'App.helpers.generic.js');
		App.router.include(apps_url + 'App.helpers.generic.eventLogGenerator.js');
		App.globals.APP_URL = app_url_cached;
		App.helpers.refreshMainLinks();
	}
	return {
		generic: {},
		createPageUrlLoadTextButton: createPageUrlLoadTextButton,
		createPageLinks: createPageLinks,
		createPageLinksWithDefine: createPageLinksWithDefine,
		createPageLinksAndShow: createPageLinks,//BC
		displayByLimit: displayByLimit,
		displayTypeAndNameOfControls: displayTypeAndNameOfControls,
		refreshMainLinks: refreshMainLinks,
		removeChildren: removeChildren,
		txt_btn_back: txt_btn_back,
		updateScripts: updateScripts
	};
})();
