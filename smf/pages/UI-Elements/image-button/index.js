App.router.define('pages/UI-Elements/image-button/index', function(page, pageName){
	var root = 'pages/UI-Elements/image-button/', navgen = App.router.navigateGenerator, links = [
		['Example 1', navgen(root + 'ex01')],
		['Events', navgen(root + 'events')]
	];
	App.helpers.createPageLinksWithDefine(page, pageName, links);
});