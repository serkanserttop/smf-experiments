App.router.define('pages/Tests/test-dotted-define', function(pageName){
	var page = Pages[pageName] = new SMF.UI.Page();
	var label = new SMF.UI.Label({"text": "Hello World"});
	page.add(label);
	page.onShow = function(e){
		App.defaults.header(page, pageName);
	}
});
