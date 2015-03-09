/*globals globals, App.helpers*/
(function(){
	var globals = App.globals, pages_url = globals.APP_URL + 'pages/', libs_url = globals.APP_URL + 'libs/', links = [
		['UI Elements', pages_url + 'UI-Elements/index.js'],
		['Es6 Test', globals.APP_URL + 'experiment/es6/es6.js'],
		['Update Scripts', function(){
			var apps_url = globals.APP_URL + 'app/';
			var host = globals.HOST_URL + '';
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
			App.globals.HOST_URL = host;
			App.globals.APP_URL = host + '/';
			App.helpers.refreshMainLinks();
		}],
		['Check App.globals.APP_URL', function(){ alert(App.globals.APP_URL); }],
		['Exit', App.globals.APP_URL + 'exit.js']
	];
	App.helpers.createPageLinksAndShow('PagesIdx', links);
})();