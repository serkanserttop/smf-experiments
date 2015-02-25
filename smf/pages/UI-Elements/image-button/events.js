/* globals load, include, helpers, Pages, SMF, globals, keys*/
(function(){
  var toggleImages;
  var HOME_URL = globals.APP_URL;
  var pageName = 'UIElementsImageButtonExEvents';
  var page = Pages[pageName] = new SMF.UI.Page({
    onKeyPress: keys.page.onKeyPress
  });
  page.clear();
  var label;
  txt_btn_clear();
  txt_btn_togle_hide();
  helpers.txt_btn_back(page, {top: '40%', left: '10%'});
  label_event();
  
  var img_btn1 = img_btn_addtocart();
  page.add(img_btn1);
  
  function appendText(obj, txt){
    var old = obj.text;
    obj.text = old + '\n' + txt;
  }
  
  function img_btn_addtocart(){
    var img_btn = new SMF.UI.ImageButton({
      left : '10%',
      top : '10%',
      touchEnabled : true,
      imageFillType : SMF.UI.ImageFillType.autosize,
      defaultImage : globals.APP_URL + 'images/addtocart-button01.png',
      highlightedImage : globals.APP_URL + 'images/addtocart-button02.png',
      inactiveImage : globals.APP_URL + 'images/addtocart-button03.png',
      text : '',
      onDoubleTap: function(e) {
        appendText(label, 'onDoubleTap called');
      },
      onHide: function(e) {
        appendText(label, 'onHide called');
      },
      onLoad: function(e) {
        appendText(label, 'onLoad called');
      },
      onLoadFailure: function(e) {
        appendText(label, 'onLoadFailure called');
      },
      onLongTouch: function(e) {
          appendText(label, 'onLongTouch called');
      },
      onPressed: function(e) {
          appendText(label, 'onPressed called');
      },
      onShow: function(e) {
          appendText(label, 'onShow called');
      },
      onTouch: function(e) {
          appendText(label, 'onTouch called');
      },
      onTouchEnabled: function(e) {
        appendText(label, 'onTouchEnabled called');
      },
      onTouchEnded: function(e) {
          appendText(label, 'onTouchEnded called');
      }
    });
    return img_btn;
  }
  
  function txt_btn_togle_hide(){
    page.textButton1 = new SMF.UI.TextButton({
      top: "20%",
      left: "10%",
      text: "Hide",
      onPressed: function(){
        var visible = img_btn1.visible;
        var txt = (visible) ? 'Show' : 'Hide';
        img_btn1.visible = !visible;
        this.text = txt;
      }
    });
    page.add(page.textButton1);
  }
    
  function txt_btn_clear(){
    var btn = new SMF.UI.TextButton({
      top: "30%",
      left: "10%",
      text: "Clear",
      fillColor: "red",
      fontColor: "white",
      onPressed: function(e) {
        label.text = '';
      }
    });
    page.add(btn);
  }
  
  function label_event(){
    label = new SMF.UI.Label({
      text: '',
      multipleLine: true,
      showScrollBar: true,
      autoSize: true,
      top: '50%',
      left: '10%'
    });
    page.add(label);
  }
  
  page.show();
    
})()

