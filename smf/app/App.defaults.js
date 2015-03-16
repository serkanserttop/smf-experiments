App.defaults = {
	colors: {
		headerBlue: '#07B0BE',
		headerWhite: '#FFFFFF',
		repeatBoxBlue: '#07B0BE',
		repeatBoxGrey: '#333333',
		repeatBoxOrange: '#D65900',
		repeatBoxWhite: '#F2F2F2'
	},
	page: {
		backgroundColor: '#D65900',
		showNavigationBar : true,
		showStatusBar : true,
		touchEnabled : true,
		onKeyPress : function (e) {
			if(Device.deviceOS !== 'Android'){ return; }
			if (e.keyCode === 4) {
				if (this.name === 'Page1') {
					Application.exit();
				} else {
					Pages.back();
				}
			}
		}
	},
	editbox: {
		left : '20%',
		width : '60%',
		height : '10%',
		fontColor : '#FFFFFF',
		fillColor : '#C0C0C0',
		text : '',
		textAlignment : SMF.UI.Alignment.center,
	},
	label: {
		minimumFontSize : 10,
		textAlignment : SMF.UI.Alignment.center,
		multipleLine : false
	},
	textbutton: {
		left : '20%',
		width : '60%',
		height : '10%',
		fontColor : '#FFFFFF'
	},
	image: {
		imageFillType : 'aspectFit'
	},
	header:{
		//fillColor: '#FFFFFF',
		//backgroundColor: '#07B0BE'
	},
	repeatbox: {
		fillColor: '#333333',
		fontColor: '#07B0BE'
	},
	'repeatbox.onHover': {
		fillColor: '#F2F2F2',
		backgroundColor: '#D65900'
	}
};

/*
width 1240
height
	header 245 %20 of width
	row h 195 %15.7 of w
	top h 82 %42 of row h
	bottom h 74 %38 of row h
	item 40 
		--not: label: height: %20, top: %40
	
	ok 56 w 31, %29 of row
		left 
		right w 82, %6.6 of row

buyuk ok h 84, w 52, left 52, 425
logo w 183, h 86, left (531 total)
*/

