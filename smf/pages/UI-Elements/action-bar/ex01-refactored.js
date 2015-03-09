/*globals SMF, Pages, keys*/
(function(){
	var pageName = 'UIElementsActionBarEx01';
	var page = new SMF.UI.Page({
    name: pageName,
		onKeyPress: App.defaults.page.onKeyPress
	});
	page.clear();
	
	page.show();

	var titleHeader = 'Action / Nav Bar Example 2';
	App.defaults.header(page, titleHeader);

})();
