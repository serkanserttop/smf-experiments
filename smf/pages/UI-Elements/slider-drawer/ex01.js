/*globals SMF, Pages, keys*/
(function(){
    var pageName = 'UIElementsSliderDrawerEx01';
	var page = Pages[pageName] = new SMF.UI.Page({
		onKeyPress: App.keys.page.onKeyPress
	});
	page.clear();
    var slider_drawer = new SMF.UI.SliderDrawer({
        width : '30%',
        touchEnabled : 'true',
        backgroundColor : 'green',
        position : 'left'
    });
    page.add(slider_drawer);

    var pageTxtBtnShow = new SMF.UI.TextButton({
        top: "10%",
        left: "30%",
        width: "50%",
        text: "Show Slider Drawer",
        onPressed: function(){
        	slider_drawer.show();
        }
    });
    
    var sliderTxtBtnHide = new SMF.UI.TextButton({
        top: "30%",
        left: "10%",
        //width: "15%",
        text: "Hide",
        onPressed: function(){
        	slider_drawer.hide();
        }
    });
    page.add(pageTxtBtnShow);
    slider_drawer.add(sliderTxtBtnHide);

    App.helpers.txt_btn_back(page, {top: '60%', left: '10%'});
    
    page.show();
})();
