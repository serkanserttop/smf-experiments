

(function(){
	function createPageUrlLoadTextButton(parent, name, url){
		var txtBtn = new SMF.UI.TextButton({
			text: name,
			onPressed: function(){
				//page.show();
				include(url);
			}
		});
		parent.add(txtBtn);
	}
	var pages_url = globals.APP_URL + 'pages/', libs_url = globals.APP_URL + 'libs/', pageUrls = [
		['Main', globals.APP_URL + 'main.js'],
		['Pages', globals.APP_URL + 'addPages.js'],
		['Add Underscore', libs_url + 'third-party/underscore-min.js'],
		//['Add Backbone', libs_url + 'third-party/backbone-min.js'],
		['Sliders', pages_url + 'slider.js'],
		['Image Buttons', pages_url + 'imagebuttons.js'],
		['Text Buttons', pages_url + 'textbuttons.js'],
		['Exit', globals.APP_URL + 'exit.js'],
		['Es6 Test', globals.APP_URL + 'experiment/es6/es6.js']
	];

	removeChildren(Pages.Page1.ScrollView, 2);

	for(var i = 0; i < pageUrls.length; i++){
		var row = pageUrls[i];
		createPageUrlLoadTextButton(Pages.Page1.ScrollView, row[0], row[1]);
	}	
})();
