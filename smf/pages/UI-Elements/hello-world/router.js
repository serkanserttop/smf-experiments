App.router.define('pages/UI-Elements/hello-world/router', function(page, pageName){
	var label = new SMF.UI.Label({"text": "Hello World From Router"});
	page.add(label);
	page.onShow = function(e){
		App.defaults.header(page, pageName);
	}
});
