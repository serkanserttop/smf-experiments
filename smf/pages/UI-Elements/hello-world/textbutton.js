(function(){
	var page = new SMF.UI.Page({name: "HelloWorld"});
	var btn = new SMF.UI.TextButton({
		text: "Hello World",
		onPressed: function(e){
			alert("I am a Native Component");
		}
	});
	page.add(btn);
	page.show();
	App.helpers.txt_btn_back(page, {top: '90%', left: '10%'});
})();