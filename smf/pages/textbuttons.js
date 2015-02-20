/* globals load, include, Pages, SMF, globals*/
//load('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js');
(function(){
  var toggleImages;
  var HOME_URL = globals.APP_URL;
  var page = Pages.Slider = new SMF.UI.Page({
      onKeyPress: keys.page.onKeyPress
  });
  Pages.Slider.clear();
  
  txt_btn1();
  txt_btn2();
  img_btn2();
  
  function toggleColors(props){
    var swaps = (props instanceof Array) ? props : ['fillColor', 'fontColor'], a = swaps[0], b = swaps[1];
    var vals = [this[a], this[b]];
    this[b] = vals[0];
    this[a] = vals[1];
  }
  
  function txt_btn1(){
    page.textButton1 = new SMF.UI.TextButton({
      top: "10%",
      left: "10%",
      text: "Dynamic Named Button",
      onPressed: function(e) {
        toggleColors.call(this);
      }
    });
    page.add(page.textButton1);
  }
    
  function txt_btn2(){
    var btn = new SMF.UI.TextButton({
      top: "20%",
      left: "10%",
      text: "Dynamic Unnamed Button",
      fillColor: "red",
      fontColor: "white",
      onPressed: function(e) {
        toggleColors.call(this);
      }
    });
    page.add(btn);
  }
  /*
  function img_btn1(){
    var btn = new SMF.UI.TextButton({
      top: "30%",
      left: "10%",
      text: "Dynamic Unnamed Button",
      fillColor: "red",
      fontColor: "white",
      onPressed: function(e) {
        toggleColors.call(this);
      }
    });
    page.add(btn);
  }*/
  
  function displayProps(obj){
    var keys = Object.keys(obj);
    alert(keys.join(', '));
  }
  
  function img_btn2(){
    var btn = new SMF.UI.ImageButton({
      //width : "80%",
      //height : "80%",
      top: "30%",
      left: "10%",
      //touchEnabled : false,
      imageFillType : SMF.UI.ImageFillType.autosize,
      defaultImage : HOME_URL + "buttons/addtocart-button01.png",
      highlightedImage : HOME_URL + "buttons/addtocart-button02.png",
      inactiveImage : HOME_URL + "buttons/addtocart-button03.png",
      //,text : "Placeholder"
      onPressed : function(e){
        alert('hello');
        //displayProps(this);
      }
    });
    page.add(btn);
  }
  
  toggleImages = (function (){
    var states = ['default', 'highlighted', 'inactive'], idx_state = 0;
    return function(){
      var state = states[idx_state];
    }
  })();
  //page.ImageButton1.alpha = 0.5;
  page.show();
    
})()
