App.helpers = (function(){
	var globals = App.globals, defaults = App.defaults;
	function createPageLinks(pageName, links, targetName, dontShow){
		if(typeof Pages[pageName] === 'undefined'){
			Pages[pageName] = new SMF.UI.Page({
				onKeyPress: defaults.page.onKeyPress
			});
		}
		var page = Pages[pageName];
		page.clear();

		/*if(!targetName){
			targetName = 'ScrollView12';
		}*/

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
			image: globals.APP_URL + "/images/1426022080_icon-ios7-arrow-forward-128.png",
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
				var lambda = links[e.rowIndex][1];
				if(typeof lambda === 'function'){
					lambda();
				}
				else if(typeof lambda === 'string'){
					include(lambda);	
				}
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
				var server = (Device.deviceOS === "Android") ? 'android' : 'ios';
				globals.environment.setServer(server, 3000);
				refreshMainLinks();
			}],
			['Set Localhost', function(){
				var server = (Device.deviceOS === "Android") ? 'android' : 'ios';
				globals.environment.setServer(server, 3000);
				refreshMainLinks();
			}],
			['Set Genymotion', function(){
				var server = (Device.deviceOS === "Android") ? 'genymotion' : 'ios';
				globals.environment.setServer(server, 3000);
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
		var apps_url = globals.APP_URL + 'app/';
		var host = globals.HOST_URL;
		include(apps_url + 'App.globals.js');
		include(apps_url + 'App.defaults.js');
		if(Device.deviceOS === 'Android'){
			include(apps_url + 'App.defaults.android.js');
		}
		else{ 
			include(apps_url + 'App.defaults.iOS.js');
		}
		include(apps_url + 'App.helpers.js');
		include(apps_url + 'App.helpers.generic.js');
		include(apps_url + 'App.helpers.generic.eventLogGenerator.js');
		//need to make sure full path is given, otherwise a bug is created as globals !== App.globals at this stage
		App.globals.HOST_URL = host;
		App.globals.APP_URL = host + '/';
		refreshMainLinks();
	}
	return {
		generic: {},
		createPageUrlLoadTextButton: createPageUrlLoadTextButton,
		createPageLinks: createPageLinks,
		createPageLinksAndShow: createPageLinks,//BC
		displayByLimit: displayByLimit,
		displayTypeAndNameOfControls: displayTypeAndNameOfControls,
		refreshMainLinks: refreshMainLinks,
		removeChildren: removeChildren,
		txt_btn_back: txt_btn_back,
		updateScripts: updateScripts
	};
})();
