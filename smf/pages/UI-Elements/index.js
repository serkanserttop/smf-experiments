(function(){
	var root = globals.APP_URL + 'pages/UI-Elements/', links = [
		['Slider', root + 'slider/index.js'],
		['Slider Drawer', root + 'slider-drawer/index.js'],
		['Image Button', root + 'image-button/index.js'],
		['Text Button', root + 'text-button/index.js'],
		['Search Bar', root + 'searchbar/index.js'],
		['RepeatBox', root + 'repeatbox/index.js']
	];
	createPageLinksAndShow('UIElementsIdx', links);
})();
