/* globals load, include, App.helpers, Pages, SMF, globals, keys*/
(function(){
  var toggleImages;
  var HOME_URL = App.globals.APP_URL;
  var pageName = 'UIElementsImageButtonExEvents';
  var page = Pages[pageName] = new SMF.UI.Page({
    onKeyPress: App.keys.page.onKeyPress
  });
  page.clear();
  var label;
  txt_btn_clear();
  txt_btn_togle_hide();
  App.helpers.txt_btn_back(page, {top: '40%', left: '10%'});
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
      defaultImage : App.globals.APP_URL + 'images/addtocart-button01.png',
      highlightedImage : App.globals.APP_URL + 'images/addtocart-button02.png',
      inactiveImage : App.globals.APP_URL + 'images/addtocart-button03.png',
      text : '',
      onDoubleTap: function(e) { appendText(label, 'onDoubleTap'); },
      onHide: function(e) { appendText(label, 'onHide'); },
      onLoad: function(e) { appendText(label, 'onLoad'); },
      onLoadFailure: function(e) { appendText(label, 'onLoadFailure'); },
      onLongTouch: function(e) { appendText(label, 'onLongTouch'); },
      onPressed: function(e) { appendText(label, 'onPressed'); },
      onShow: function(e) { appendText(label, 'onShow'); },
      onTouch: function(e) { appendText(label, 'onTouch'); },
      onTouchEnabled: function(e) { appendText(label, 'onTouchEnabled'); },
      onTouchEnded: function(e) { appendText(label, 'onTouchEnded'); }
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

