App.router.define('pages/UI-Elements/hello-world/label', function(page, pageName){
	var label = new SMF.UI.Label({"text": "Hello World"});
	page.add(label);
	page.onShow = function(){
		App.defaults.header(page, 'Hello World - Label');
	}
});
