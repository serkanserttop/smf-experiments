/* globals load, include, Pages, SMF, globals, keys*/
App.router.define('pages/UI-Elements/text-button/events', function(page, pageName){
  var toggleImages;
  var HOME_URL = App.globals.APP_URL;
  
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
      text: "Dynamic Button",
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
  
  function displayProps(obj){
    var keys = Object.keys(obj);
    alert(App.defaults.join(', '));
  }
  
  function img_btn2(){
    var btn = new SMF.UI.ImageButton({
      //width : "80%",
      //height : "80%",
      top: "30%",
      left: "10%",
      //touchEnabled : false,
      imageFillType : SMF.UI.ImageFillType.autosize,
      defaultImage : 'header.png',
      highlightedImage : 'header2.png',
      inactiveImage : 'header3.png',
      //,text : "Placeholder"
      onPressed : function(e){
        alert('hello');
      }
    });
    page.add(btn);
  }
  
  toggleImages = (function toggleImages(){
    var states = ['default', 'highlighted', 'inactive'], idx_state = 0;
    return function(){
      var state = states[idx_state];
      if(idx_state === states.length - 1){
        idx_state = 0;
      }
      //set image according to the state, but how?
    }
  })();
  
  //App.helpers.txt_btn_back(page, {top: '60%', left: '10%'}); 
});