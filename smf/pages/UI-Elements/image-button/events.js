/* globals App, SMF*/
App.router.define('pages/UI-Elements/image-button/events', function(page, pageName){
  function appendText(obj, txt){
    var old = obj.text;
    obj.text = old + '\n' + txt;
  }
  
  function img_btn_addtocart(){
    var btn = new SMF.UI.ImageButton({
      left : '10%',
      top : '5%',
      touchEnabled : true,
      imageFillType : SMF.UI.ImageFillType.autosize,
      defaultImage : 'header.png',
      highlightedImage : 'header2.png',
      inactiveImage : 'header3.png',
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
    return btn;
  }
    
  function label_event(){
    var label = new SMF.UI.Label({
      text: '',
      width: '80%',
      height: '70%',
      multipleLine: true,
      showScrollBar: true,
      //alignment: SMF.UI.Alignment.top,
      alignment: 'top',
      //autoSize: true,
      top: '20%',
      left: '10%'
    });
    return label;
  }

  var HOME_URL = App.globals.APP_URL;
  var label = label_event();
  page.add(label);
  
  var img_btn = img_btn_addtocart();
  page.add(img_btn);
  
  page.onShow = function(){
    var rightBarButtomHide = {
      title: 'Hide',
      onSelected: function(e){
        var visible = img_btn.visible;
        var txt = (visible) ? 'Show' : 'Hide';
        img_btn.visible = !visible;
        //page.navigationItem.rightBarButtonItems[0].title = txt;
        this.title = txt;
      }
    };

    var rightBarButtomClear = {
      title: 'Clear',
      onSelected: function(e){
        label.text = '';
      }
    };
    App.defaults.header(page, pageName, [rightBarButtomHide, rightBarButtomClear]);
  };
});