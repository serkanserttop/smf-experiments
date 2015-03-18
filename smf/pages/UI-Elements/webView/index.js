/* globals App, SMF*/
App.router.define('pages/UI-Elements/webView/index', function(page, pageName){
	var root = 'pages/UI-Elements/webView/', navgen = App.router.navigateGenerator, links = [
		['Example 1', navgen(root + 'ex01')]
	];
	App.helpers.createLinks(page, pageName, links);
});