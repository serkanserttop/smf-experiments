(function(){
	var root = App.globals.APP_URL + 'pages/Settings/', links = [
		['Refresh main.js', root + 'ex01.js']
	];
	App.helpers.createPageLinks('SettingsIdx', links);
})();
/*
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
*/