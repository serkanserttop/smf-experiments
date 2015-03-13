/* globals App, SMF*/
App.router.define('pages/UI-Elements/webView/index', function(page, pageName){
	var root = 'pages/UI-Elements/webView/', navgen = App.router.navigateGenerator, links = [
		['Example 1', navgen(root + 'ex01')],
		['Example 2', navgen(root + 'ex02')],
		['Example StackOverflow', navgen(root + 'ex-stackoverflow-from-ex02.js')]
	];
	App.helpers.createPageLinksWithDefine(page, pageName, links);
});