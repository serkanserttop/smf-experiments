(function(){
	var root = App.globals.APP_URL + 'pages/UI-Elements/repeatbox/', links = [
		['Example 1', root + 'ex01.js'],
		['Example 2', root + 'ex02.js'],
		['Events ', root + 'events.js'],
		['Row', root + 'row.js']
	];
	App.helpers.createPageLinksAndShow('UIElementsRepeatboxIdx', links);
})();
