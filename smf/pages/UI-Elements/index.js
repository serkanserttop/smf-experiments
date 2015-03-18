/*globals SMF, App*/
App.router.define('pages/UI-Elements/index', function(page, pageName){
	var root = 'pages/UI-Elements/', navgen = App.router.navigateGenerator, links = [
		['Hello World', navgen(root + 'hello-world/index')],
		['Text Button', navgen(root + 'text-button/index')],
		['Image Button', navgen(root + 'image-button/index')],
		['Action Bar', navgen(root + 'action-bar/index')],
		['RepeatBox', navgen(root + 'repeatbox/index')],
		['Search Bar', navgen(root + 'searchbar/index')],
		['Slider Drawer', navgen(root + 'slider-drawer/index')]
	];
	App.helpers.createLinks(page, pageName, links);
});
