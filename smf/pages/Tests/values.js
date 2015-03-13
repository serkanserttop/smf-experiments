//App.router.app_url = 'http://127.0.0.1/:3000/';
//App.globals.APP_URL = 'http://127.0.0.1/:3000/';
//alert(App.globals.APP_URL);
//alert(App.router.environment);
//alert(Object.keys(App.router.routes));

(function(){
	var a = App.router.routes;
	var b = Object.keys(a), c = b[0];
	//a[c]();
	Pages[c].show();
})()


