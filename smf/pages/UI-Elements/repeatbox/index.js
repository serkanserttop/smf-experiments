App.router.define('pages/UI-Elements/repeatbox/index', function(page, pageName){
	var root = 'pages/UI-Elements/repeatbox/', navgen = App.router.navigateGenerator, links = [
		['Example 1', navgen(root + 'ex01')],
		['Example 2', navgen(root + 'ex02')],
		['Events', navgen(root + 'events')]
		//,['Row', navgen(root + 'row')]
	];
	App.helpers.createPageLinksWithDefine(page, pageName, links);
});