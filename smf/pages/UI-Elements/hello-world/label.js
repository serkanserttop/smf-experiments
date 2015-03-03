(function(){
	var page = new SMF.UI.Page({name: "HelloWorld"});
	var label = new SMF.UI.Label({"text": "Hello World"});
	page.add(label);
	page.show();
	App.helpers.txt_btn_back(page, {top: '90%', left: '10%'});
})();
