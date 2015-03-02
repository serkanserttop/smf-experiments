(function(){
	var root = App.globals.APP_URL + 'pages/UI-Elements/webView/', links = [
		['Example 1', root + 'ex01.js'],
		['Example 2', root + 'ex02.js'],
		['Example StackOverflow', root + 'ex-stackoverflow-from-ex02.js']
	];
	App.helpers.createPageLinksAndShow('UIElementsWebViewIdx', links);
})();
