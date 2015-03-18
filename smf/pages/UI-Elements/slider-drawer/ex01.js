/*globals SMF, Pages, keys*/
App.router.define('pages/UI-Elements/slider-drawer/ex01', function(page, pageName){

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
    page.add(pageTxtBtnShow);
    
    var sliderTxtBtnHide = new SMF.UI.TextButton({
        top: "30%",
        left: "10%",
        //width: "15%",
        text: "Hide",
        onPressed: function(){
        	slider_drawer.hide();
        }
    });
    slider_drawer.add(sliderTxtBtnHide);

    //App.helpers.txt_btn_back(page, {top: '60%', left: '10%'});
});