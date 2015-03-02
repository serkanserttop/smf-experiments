/*globals globals, App.helpers*/
(function(){
	var pages_url = App.globals.APP_URL + 'pages/', libs_url = App.globals.APP_URL + 'libs/', links = [
		['UI Elements', pages_url + 'UI-Elements/index.js'],
		['Es6 Test', App.globals.APP_URL + 'experiment/es6/es6.js'],
		['Exit', App.globals.APP_URL + 'exit.js']
	];
	App.helpers.createPageLinksAndShow('PagesIdx', links);
})();
