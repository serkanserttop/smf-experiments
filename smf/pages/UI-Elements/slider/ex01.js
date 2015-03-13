/*globals SMF, App*/
App.router.define('pages/UI-Elements/slider/ex01', function(page, pageName){
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	var container = new SMF.UI.Container({
		top: '10%',
		left: '10%',
		width: '80%',
		height: '80%',
		contentHeight: '100%',
		contentWidth: '100%'
	});

	var slider = new SMF.UI.Slider({
		top: "10%",
		left: "10%",
		valueRangeMin: 0,
		valueRangeMax: 100,
		value: 50, //gives initial value
		stepSize: 5,
		showThumbnail: false
		//,position: SMF.UI.SliderDrawerPosition.left, // iOS only
		/*,onShow: function(){
			alert('SMF.UI.Slider.onShow is called');
		}*/
	});
	
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

	page.add(container);
	container.add(slider);
	page.add(txt_btn);
	page.onShow = function(){
		//alert('showing pages/UI-Elements/slider/ex01');
		App.defaults.header(page, 'Slider Example 1');
	};
});