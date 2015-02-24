/*
(function (){
	Pages.Sliders.clear();
	//add Pages.Slider
	var page = Pages.Sliders = new SMF.UI.Page({
		name: 'Sliders',
		onKeyPress: keys.page.onKeyPress,
		onKeyPressed: keys.page.onKeyPress
	});

	var txtBtn = new SMF.UI.TextButton({
		text: 'Sliders',
		onPressed: function(){
			page.show();
		}
	});
	Pages.Page1.ScrollView.add(txtBtn);

	var container = new SMF.UI.Container({
		top: '10%',
		left: '10%',
		width: '80%',
		height: '80%',
		contentHeight: '100%',
		contentWidth: '100%'
	});
	Pages.Sliders.add(container);

	var slider = new SMF.UI.Slider({
    top: "10%",
    left: "10%",
    valueRangeMin: 0,
    valueRangeMax: 100,
    value: 50, //gives initial value
    stepSize: 5,
    showThumbnail: false
	});
	container.add(slider);

})();
*/