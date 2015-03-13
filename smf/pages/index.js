/*globals globals, App.helpers*/
(function(){
	var globals = App.globals, root = 'pages/', pages_url = globals.APP_URL + root, libs_url = globals.APP_URL + 'libs/', links = [
		//['UI Elements', pages_url + 'UI-Elements/index.js'],
		['UI Elements', function(){
			App.router.navigate(root + 'UI-Elements/index');
		}],
		['Tests', pages_url + 'Tests/index.js'],
		['Es6 Test', globals.APP_URL + 'experiment/es6/es6.js'],
		['Update Scripts', function(){
			var app_url = globals.APP_URL;
			var apps_url = app_url + 'app/';
			include(app_url + 'libs/router.js');
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
			App.globals.APP_URL = app_url;
			App.helpers.refreshMainLinks();
		}],
		['Check App.globals.APP_URL', function(){ alert(App.globals.APP_URL); }],
		['Check DeviceOS', function(){ alert(Device.deviceOS); }],
		['Exit', App.globals.APP_URL + 'exit.js']
	];
	App.helpers.createPageLinksAndShow('PagesIdx', links);
})();