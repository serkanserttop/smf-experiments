/*globals SMF, globals, keys, Pages, helpers*/
(function(){
  var pageName = 'UIElementsImageButtonEx01';
	var page = Pages[pageName] = new SMF.UI.Page({
		onKeyPress: keys.page.onKeyPress
	});
	page.clear();
  var img_btn1 = img_btn_addtocart();
  page.add(img_btn1);
  
  txt_btn_toggle_enabled();
  
  function img_btn_addtocart(){
    var img_btn = new SMF.UI.ImageButton({
      left : '10%',
      top : '10%',
      touchEnabled : true,
      imageFillType : SMF.UI.ImageFillType.autosize,
      defaultImage : globals.APP_URL + 'images/addtocart-button01.png',
      highlightedImage : globals.APP_URL + 'images/addtocart-button02.png',
      inactiveImage : globals.APP_URL + 'images/addtocart-button03.png',
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
    page.add(btn);
  }
  
  helpers.txt_btn_back(page, {top: '50%', left: '10%'});
  page.show();
})();