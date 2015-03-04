/*
onCancel
onSearchStart
onSearchSubmit
onTextChange
*/
/*globals SMF, Pages, keys*/
(function(){
	
	function logNewEvent(label, txt){
		appendText(label, txt);
	}

	function appendText(target, txt){
    var old = target.text;
    target.text = old + '\n' + txt;
  }
  function create_txt_btn_toggle_hide(target){
    var txt_btn = new SMF.UI.TextButton({
      top: "10%",
      left: "60%",
      width: "40%",
      text: "Hide",
      onPressed: function(){
        var visible = target.visible;
        var txt = (visible) ? 'Show' : 'Hide';
        target.visible = !visible;
        this.text = txt;
      }
    });
    return txt_btn;
  }
    
  function create_txt_btn_clear(target){
    var btn = new SMF.UI.TextButton({
      top: "20%",
      left: "60%",
      width: "40%",
      text: "Clear",
      fillColor: "red",
      fontColor: "white",
      onPressed: function(e) {
        target.text = '';
      }
    });
    return btn;
  }
  
  function create_label_for_events(){
    label = new SMF.UI.Label({
      text: '',
      multipleLine: true,
      showScrollBar: true,
      autoSize: true,
      top: '30%',
      height: '100%',
      width: '40%',
      left: '50%'
    });
    return label;
  }
  var pageName = 'UIElementsSearchBarEvents', keys = App.keys;
	var page = Pages[pageName] = new SMF.UI.Page({
		fillColor:"red",
		onKeyPress: keys.page.onKeyPress
	});
	page.clear();

	var label_for_events = create_label_for_events();
  var btn_clear = create_txt_btn_clear(label_for_events);
  
  page.add(label_for_events);
  page.add(btn_clear);

	var headerDeviceSpecific;
	if(Device.deviceOS === "Android"){
		headerDeviceSpecific = {
			//,icon: 'find appropriate icon'
		};
	}
	else{
		headerDeviceSpecific = {
			barStyle: SMF.UI.SearchBarStyle.blackOpaque,
			setShowsCancel: true,
			stickToNavigationBar: true,
			tintColor: 'yellow'
		};
	}

	var events = {};
	_.each(['onCancel', 'onSearchStart', 'onSearchSubmit', 'onTextChange', ''], function(eventName) {
  	events[eventName] = function(e){
  		logNewEvent(label_for_events, eventName);
  	};
	});
	var search_bar = new SMF.UI.SearchBar(_.extend({
		placeHolder: "Enter Name",
		top: "0",
		left: "10%",
		height: '10%',
		width: "100%"
		,text: "" //iOS fix for unwanted quotes
	}, headerDeviceSpecific, events));

	App.helpers.txt_btn_back(page, {top: '90%', left: '60%', width: '30%'});

	page.add(search_bar);
	page.show();

})();
