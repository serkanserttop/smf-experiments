/*globals SMF, App*/
App.router.define('pages/UI-Elements/index', function(page, pageName){
	var root = 'pages/UI-Elements/', navgen = App.router.navigateGenerator, links = [
		['Hello World', navgen(root + 'hello-world/index')],
		['Action Bar', navgen(root + 'action-bar/index')],
		['Image Button', navgen(root + 'image-button/index')],
		['RepeatBox', navgen(root + 'repeatbox/index')],
		['Search Bar', navgen(root + 'searchbar/index')],
		['Slider', navgen(root + 'slider/index')],
		['Slider Drawer', navgen(root + 'slider-drawer/index')],
		['Text Button', navgen(root + 'text-button/index')],
		['Events', navgen(root + 'events/index')]
	];
	App.helpers.createPageLinksWithDefine(page, pageName, links);
});
