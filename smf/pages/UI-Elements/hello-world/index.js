App.router.define('pages/UI-Elements/hello-world/index', function(page, pageName){
	var pages_url = 'pages/UI-Elements/hello-world/', navgen = App.router.navigateGenerator, links = [
		['Label', navgen(pages_url + 'label')],
		['Text Button', navgen(pages_url + 'textbutton')]
	];
	App.helpers.createLinks(page, pageName, links);
});