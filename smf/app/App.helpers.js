App.helpers = (function(){
	var globals = App.globals, defaults = App.defaults || {}, colors = defaults.colors || {};
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
	function createLinks(page, pageName, links){
		var lbl = new SMF.UI.Label({
			height : "100%",
			left: '10%',
			top: 0,
			width: '100%',
			fillColor: colors.repeatBoxGrey || 'black',
			fontColor: colors.repeatBoxBlue || 'orange',
			touchEnabled: false
		});

		var arrow = new SMF.UI.Label({
			height : "100%",
			left: "90%",
			width: '10%',
			top: 0,
			text: '>',
			fillColor: colors.repeatBoxGrey || 'black',
			fontColor: colors.repeatBoxBlue || 'orange',
			touchEnabled: false
		});

		var line = new SMF.UI.Line({
			top: '93%',
			left: 0,
			width: '100%',
			borderColor: colors.repeatBoxBlue || 'orange',
			borderWidth: '1%',
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
				height: App.defaults.repeatbox.height || '8%',
				fillColor: App.defaults.repeatbox.fillColor || 'yellow'
			}
		});

		rBox.itemTemplate.add(lbl);
		rBox.itemTemplate.add(arrow);
		rBox.itemTemplate.add(line);

		page.add(rBox);
		page.backgroundColor = App.defaults.page.backgroundColor;
		page.onShow = function(){
			App.defaults.header(page, pageName);
		};
	}
	function definePage(pageName, callback){
		if (typeof Pages[pageName] !== 'undefined') {
			Pages[pageName].clear();
		} else {
			Pages[pageName] = new SMF.UI.Page({
				fillColor: App.defaults.colors.repeatBoxGrey,
				onKeyPress: App.defaults.page.onKeyPress,
				onShow: function(){
					App.defaults.header(Pages[pageName]);
				}
			});
		}
		callback(Pages[pageName], pageName);
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
		createLinks(Pages.Page1, 'Page1', links);
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
		//alert('updateScripts');
		App.router.include(app_url_cached + 'libs/router.js');
		App.router.include(apps_url + 'App.globals.js');
		App.router.include(apps_url + 'App.images.js');
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
	function pageShow(name){
		return function(){
			Pages[name].show();
		};
	}
	return {
		generic: {},
		createPageLinksAndShow: createLinks,//BC
		//createPageLinks: createLinks,
		createLinks: createLinks,
		pageShow: pageShow,
		refreshMainLinks: refreshMainLinks,
		txt_btn_back: txt_btn_back,
		updateScripts: updateScripts
	};
})();
