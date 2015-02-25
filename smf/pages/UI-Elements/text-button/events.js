/* globals load, include, helpers, Pages, SMF, globals, keys*/
(function(){
  var toggleImages;
  var HOME_URL = globals.APP_URL;
  var pageName = 'UIElementsTextButtonExEvents';
  var page = Pages[pageName] = new SMF.UI.Page({
    onKeyPress: keys.page.onKeyPress
  });
  page.clear();
  var label;
  txt_btn_events();
  txt_btn_clear();
  helpers.txt_btn_back(page, {top: '30%', left: '10%'});
  label_event();
  
  function appendText(obj, txt){
    var old = obj.text;
    obj.text = old + '\n' + txt;
  }
  
  function txt_btn_events(){
    page.textButton1 = new SMF.UI.TextButton({
      top: "10%",
      left: "10%",
      text: "Fire Events",
      onDoubleTap: function(e) {
        appendText(label, 'onDoubleTap called');
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
      onTouchEnded: function(e) {
          appendText(label, 'onTouchEnded called');
      }
    });
    page.add(page.textButton1);
  }
    
  function txt_btn_clear(){
    var btn = new SMF.UI.TextButton({
      top: "20%",
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
      top: '40%',
      left: '10%'
    });
    page.add(label);
  }
  
  page.show();
    
})()
