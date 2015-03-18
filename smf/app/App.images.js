(function(){
	var image_root = (App.globals.APP_URL === '') ? '' : App.globals.APP_URL + 'images/';
	var url = {
		arrow: '1426022080_icon-ios7-arrow-forward-128.png',
		headerBack: 'header3.png',
		logo: 'smf-logo.png'
	};
	App.images = {
		url: url,
		root: image_root,
		arrow: new SMF.UI.Image({
			image: url.arrow,
			touchEnabled: false
		}),
		logo: new SMF.UI.Image({
			image: url.logo,
			touchEnabled: false
		})
	};
})();
