
(function(){
	
	var pagesUrl = globals.APP_URL + 'scripts/pages/', pageUrls = [
		['Main', globals.APP_URL + 'main.js'],
		['Pages', globals.APP_URL + 'addPages.js'],
		['Add Underscore', globals.APP_URL + 'scripts/third-party/underscore-min.js'],
		['Add Backbone', globals.APP_URL + 'scripts/third-party/backbone-min.js'],
		['Sliders', pagesUrl + 'slider.js'],
		['Image Buttons', pagesUrl + 'imagebuttons.js'],
		['Text Buttons', pagesUrl + 'textbuttons.js']
	];

	//Pages.Page1.ScrollView.clear();
	removeChildren(Pages.Page1.ScrollView, 2);

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

	for(var i = 0; i < pageUrls.length; i++){
		var row = pageUrls[i];
		createPageUrlLoadTextButton(Pages.Page1.ScrollView, row[0], row[1]);
	}	
})();


/*
(function(){
	var len = Pages.Page1.ScrollView.controls.length;
	alert(len);
	for(var i = 2; i < len; i++){
		Pages.Page1.ScrollView.remove(Pages.Page1.ScrollView.controls[i]);
	}
	alert(Pages.Page1.ScrollView.controls.length);
})();
*/


(function(){
	//displayTypeAndNameOfControls(Pages.Page1.ScrollView.controls, 2);
})();

//displayByLimit(Pages.Page1.ScrollView);