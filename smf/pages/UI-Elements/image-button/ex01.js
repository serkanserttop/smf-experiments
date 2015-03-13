/*globals SMF, App*/
App.router.define('pages/UI-Elements/image-button/ex01', function(page, pageName){
  function img_btn_addtocart(){
    var img_btn = new SMF.UI.ImageButton({
      left : '10%',
      top : '10%',
      touchEnabled : true,
      imageFillType : SMF.UI.ImageFillType.autosize,
      defaultImage : App.globals.APP_URL + 'images/addtocart-button01.png',
      highlightedImage : App.globals.APP_URL + 'images/addtocart-button02.png',
      inactiveImage : App.globals.APP_URL + 'images/addtocart-button03.png',
      text : ''
    });
    return img_btn;
  }
  function txt_btn_toggle_enabled(){
    var states = ['Disable', 'Enable'], state_idx = 0;
    var btn = new SMF.UI.TextButton({
      text: states[state_idx],
      left : '10%',
      top : '30%',
      onPressed: function(){
        var enabled = img_btn1.enabled;
        if(enabled){
          state_idx = 1;
        }
        else{
          state_idx = 0;
        }
        img_btn1.enabled = !enabled;
        this.text = states[state_idx];
      }
    });
    return btn;
  }

  var img_btn1 = img_btn_addtocart();
  page.add(img_btn1);

  txt_btn = txt_btn_toggle_enabled();
  page.add(txt_btn);

  page.onShow = function(e){
    App.defaults.header(page, pageName);
  }
});