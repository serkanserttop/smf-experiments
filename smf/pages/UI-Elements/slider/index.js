App.router.define('pages/UI-Elements/slider/index', function(page, pageName){
	var root = 'pages/UI-Elements/slider/', navgen = App.router.navigateGenerator, links = [
		['Example 1', navgen(root + 'ex01')]
	];
	App.helpers.createPageLinksWithDefine(page, pageName, links);
});