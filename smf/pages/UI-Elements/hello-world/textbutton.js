App.router.define('pages/UI-Elements/hello-world/textbutton', function(page, pageName){
	var btn = new SMF.UI.TextButton({
		text: "Hello World",
		onPressed: function(e){
			alert("I am a Native Component");
		}
	});
	page.add(btn);
	page.onShow = function(){
		App.defaults.header(page, 'Hello World - TextButton');
	};
});
