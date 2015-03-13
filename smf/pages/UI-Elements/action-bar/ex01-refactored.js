/*globals SMF, App*/
App.router.define('pages/UI-Elements/action-bar/ex01-refactored', function(page, pageName){
	page.onShow = function(e){
		App.defaults.header(page, 'Action / Nav Bar Example 2');
	};
});
