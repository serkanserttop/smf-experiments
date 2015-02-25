/* globals load, include, helpers, Pages, SMF, globals, keys*/
(function(){
	var root = globals.APP_URL + 'pages/UI-Elements/searchbar/', links = [
		['Example 1', root + 'ex01.js'],
		['Header', root + 'header.js']
	];
	helpers.createPageLinksAndShow('UIElementsSearchbarIdx', links);
})();
