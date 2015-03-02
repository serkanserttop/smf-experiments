App.keys = {
	page: {
		showNavigationBar : true,
		showStatusBar : false,
		touchEnabled : true,
		onKeyPress : function (e) {
			if (e.keyCode === 4) {
				if (this.name === "Page1") {
					Application.exit();
				} else {
					Pages.back();
				}
			}
		}
	},
	editbox: {
		left : "20%",
		width : "60%",
		height : "10%",
		fontColor : "#FFFFFF",
		fillColor : "#C0C0C0",
		text : "",
		textAlignment : SMF.UI.Alignment.center,
	},
	label: {
		minimumFontSize : 10,
		textAlignment : SMF.UI.Alignment.center,
		multipleLine : false
	},
	textbutton: {
		left : "20%",
		width : "60%",
		height : "10%",
		fontColor : "#FFFFFF"
	},
	image: {
		imageFillType : "aspectFit"
	}
};