/*globals globals, App.helpers*/
(function(){
	var root = App.globals.APP_URL + 'pages/UI-Elements/', links = [
		['Hello World', root + 'hello-world/index.js'],
		['Action Bar', root + 'action-bar/index.js'],
		['Image Button', root + 'image-button/index.js'],
		['RepeatBox', root + 'repeatbox/index.js'],
		['Search Bar', root + 'searchbar/index.js'],
		['Slider', root + 'slider/index.js'],
		['Slider Drawer', root + 'slider-drawer/index.js'],
		['Text Button', root + 'text-button/index.js'],
		['Events', root + 'events/index.js'],
		['Scroll View Extender', root + 'webView/index.js'],
		['Scroll View Extender', root + 'webView/index.js'],
		['Scroll View Extender', root + 'webView/index.js'],
		['Scroll View Extender', root + 'webView/index.js']
	];
	App.helpers.createPageLinks('UIElementsIdx', links);
})();
