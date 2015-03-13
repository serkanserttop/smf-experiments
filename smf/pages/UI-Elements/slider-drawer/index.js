/* globals App, SMF*/
App.router.define('pages/UI-Elements/slider-drawer/index', function(page, pageName){
	var root = 'pages/UI-Elements/slider-drawer/', navgen = App.router.navigateGenerator, links = [
		['Example 1', navgen(root + 'ex01')],
		['Events', navgen(root + 'events')]
	];
	App.helpers.createPageLinksWithDefine(page, pageName, links);
});