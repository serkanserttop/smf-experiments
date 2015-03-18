/* globals App, SMF*/
App.router.define('pages/UI-Elements/text-button/index', function(page, pageName){
	var root = 'pages/UI-Elements/text-button/', navgen = App.router.navigateGenerator, links = [
		//['Example 1', navgen(root + 'ex01')],
		['Events', navgen(root + 'events')]
	];
	App.helpers.createLinks(page, pageName, links);
});