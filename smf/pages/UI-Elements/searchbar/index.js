/* globals load, include, App.helpers, Pages, SMF, globals, keys*/
(function(){
	var root = App.globals.APP_URL + 'pages/UI-Elements/searchbar/', links = [
		['Example 1', root + 'ex01.js'],
		['Events', root + 'events.js'],
		['Header', root + 'header.js'],
		['Header At NavBar', root + 'header-with-navbar.js']
	];
	App.helpers.createPageLinks('UIElementsSearchbarIdx', links);
})();
