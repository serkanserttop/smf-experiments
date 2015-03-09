
(function (){;
	var pageName = 'UIElementsSliderEx01';
	var page = new SMF.UI.Page({
    name: pageName,
		onKeyPress: App.defaults.page.onKeyPress
	});
	page.clear();

	var container = new SMF.UI.Container({
		top: '10%',
		left: '10%',
		width: '80%',
		height: '80%',
		contentHeight: '100%',
		contentWidth: '100%'
	});
	page.add(container);

	var slider = new SMF.UI.Slider({
	    top: "10%",
	    left: "10%",
	    valueRangeMin: 0,
	    valueRangeMax: 100,
	    value: 50, //gives initial value
	    stepSize: 5,
	    showThumbnail: false,
	    //position: SMF.UI.SliderDrawerPosition.left, // iOS only
	    onShow: function(){
	    	alert('SMF.UI.Slider.onShow is called');
	    }
	});
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	container.add(slider);
	
	var txt_btn = new SMF.UI.TextButton({
	    top: "30%",
	    left: "10%",
	    text: "Randomly Change Value",
	    backgroundColor: 'red',
	    onPressed: function(e) {
	        slider.animate({
				property : 'width', //only width or alpha
				endValue : getRandomInt(20, 80) + '%',
				motionEase : SMF.UI.MotionEase.plain,
				duration : getRandomInt(250, 1000),
				onFinish : function () {
					//do your action after finishing the animation
				}
			});
	    }
	});
	page.add(txt_btn);
	App.helpers.txt_btn_back(page, {top: '60%', left: '10%'});
	page.show();
})();
