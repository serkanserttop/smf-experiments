/* globals App, SMF*/
App.router.define('pages/UI-Elements/searchbar/index', function(page, pageName){
	var root = 'pages/UI-Elements/searchbar/', navgen = App.router.navigateGenerator, links = [
		['Example 1', navgen(root + 'ex01')],
		['Events', navgen(root + 'events')],
		['Header', navgen(root + 'header')],
		['Header At NavBar', navgen(root + 'header-with-navbar')]
	];
	App.helpers.createPageLinksWithDefine(page, pageName, links);
});