(function(){
	var root = App.globals.APP_URL + 'pages/UI-Elements/hello-world/', links = [
		['Label', root + 'label.js'],
		['Text Button', root + 'textbutton.js']
	];
	App.helpers.createPageLinks('UIElementsHelloWorldIdx', links);
})();
