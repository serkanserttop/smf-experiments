App.router.define('pages/UI-Elements/action-bar/index', function(page, pageName){
	var root = 'pages/UI-Elements/action-bar/', navgen = App.router.navigateGenerator, links = [
		['Example 1', navgen(root + 'ex01')],
		['Example 1 - Refactored', navgen(root + 'ex01-refactored')]
	];
	App.helpers.createPageLinksWithDefine(page, pageName, links);
});