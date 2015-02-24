(function(){
	var pages_url = globals.APP_URL + 'pages/', libs_url = globals.APP_URL + 'libs/', links = [
		['UI Elements', pages_url + 'UI-Elements/index.js'],
		['Es6 Test', globals.APP_URL + 'experiment/es6/es6.js'],
		['Exit', globals.APP_URL + 'exit.js'],
	];
	createPageLinksAndShow('PagesIdx', links);
})();
