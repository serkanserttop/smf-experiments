(function(){
	//var pageName = "Tests/test-dotted";
	var pageName = "Teststestdotted";
	var page = Pages[pageName] = new SMF.UI.Page();
	var label = new SMF.UI.Label({"text": "Hello World"});
	page.add(label);
	page.show();
	//App.defaults.header(page, pageName);
})();
