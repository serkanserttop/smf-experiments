(function(){
	var root = App.globals.APP_URL + 'pages/UI-Elements/action-bar/', links = [
		['Example 1', root + 'ex01.js'],
		['Example 1 - Refactored', root + 'ex01-refactored.js']
		//['Events', root + 'events.js']
	];
	App.helpers.createPageLinks('UIElementsActionBarIdx', links);
})();
