(function(){
	var page = new SMF.UI.Page({name: "HelloWorld"});
	var label = new SMF.UI.Label({"text": "Hello World"});
	page.add(label);
	page.show();
	App.defaults.header(page, 'Hello World - Label');
})();
