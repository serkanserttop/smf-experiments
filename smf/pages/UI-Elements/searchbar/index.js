/* globals load, include, App.helpers, Pages, SMF, globals, keys*/
(function(){
	var root = App.globals.APP_URL + 'pages/UI-Elements/searchbar/', links = [
		['Example 1', root + 'ex01.js'],
		['Header', root + 'header.js']
	];
	App.helpers.createPageLinksAndShow('UIElementsSearchbarIdx', links);
})();
