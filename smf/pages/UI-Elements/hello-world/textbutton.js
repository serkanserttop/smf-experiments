App.router.define('pages/UI-Elements/hello-world/textbutton', function(page, pageName){
	var btn = new SMF.UI.TextButton({
		text: "Click Me",
		onPressed: function(e){
			alert("TextButton Says Hello");
		}
	});
	page.add(btn);
	page.onShow = function(){
		App.defaults.header(page, 'Hello World - TextButton');
	};
});
