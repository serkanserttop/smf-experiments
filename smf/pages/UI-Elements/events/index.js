App.router.define('pages/UI-Elements/events/index', function(page, pageName){
	var root = 'pages/UI-Elements/events/', navgen = App.router.navigateGenerator, links = [
		['setTimeout', navgen(root + 'setTimeout')]
	];
	App.helpers.createPageLinksWithDefine(page, pageName, links);
});
