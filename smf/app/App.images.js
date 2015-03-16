(function(){
	var urls = {
		arrow: App.globals.APP_URL + 'images/1426022080_icon-ios7-arrow-forward-128.png',
		logo: App.globals.APP_URL + 'smf-logo.png'
	};
	App.images = {
		url: urls,
		arrow: new SMF.UI.Image({
			image: urls.arrow,
			touchEnabled: false
		}),
		logo: new SMF.UI.Image({
			image: urls.logo,
			touchEnabled: false
		})
	};
})();
