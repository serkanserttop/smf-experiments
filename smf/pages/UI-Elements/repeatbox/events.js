/*globals SMF, Pages, keys*/
(function(){
	function updateRepeatBoxWithNewItems(repeatBox, items){
		repeatBox.dataSource = items;
		repeatBox.refresh();
	}
	function logNewEvent(txt){
		appendText(label_for_events, txt);
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
  
	var pageName = 'UIElementsRepeatBoxEvents', keys = App.keys;
	var page = Pages[pageName] = new SMF.UI.Page({
		onKeyPress: keys.page.onKeyPress
	});
	page.clear();

	var static_array = [
		{'lang': 'Javascript'},
		{'lang': 'Ruby'},
		{'lang': 'Python'},
		{'lang': 'Java'},
		{'lang': 'Objective-C'},
		{'lang': 'C++'},
		{'lang': 'Golang'}
	];

	var label_for_repeatbox = new SMF.UI.Label({
		height : "100%",
		top: 0,
		width: '40%',
		fillColor: 'black',
		fontColor: 'orange',
		touchEnabled: false,
		backgroundTransparent: false
	});

	var rBox = new SMF.UI.RepeatBox({
		width : "50%",
		height : "100%",
		left : 0,
		top : 0,
		dataSource : static_array,
		showScrollbar : true,
		enablePullDownToRefresh: true,
		enablePullUpToRefresh: true,
		onHide: function(e){ logNewEvent('onHide called'); },
		onLongTouch: function(e){ logNewEvent('onLongTouch called'); },
		onPullDown: function(e){ logNewEvent('onPullDown called'); },
		onPullUp: function(e){ logNewEvent('onPullUp called'); },
		onRowDeleted: function(e){ logNewEvent('onRowDeleted called'); },
		onRowDeleting: function(e){ logNewEvent('onRowDeleting called'); },
		//onScroll: function(e){ logNewEvent('onScroll called'); },
		onSelectedItem: function(e){ logNewEvent('onSelectedItem called'); },
		onSelectionChanged: function(e){ logNewEvent('onSelectionChanged called'); },
		onShow: function(e){ logNewEvent('onShow called'); },
		onSwipe: function(e){ logNewEvent('onSwipe called'); },
		onTouch: function(e){ logNewEvent('onTouch called'); },
		onTouchEnded: function(e){ logNewEvent('onTouchEnded called'); },
		onRowRender: function(e){
			var label = this.controls[0];
			label.text = e.rowData.lang;	
			label.fillColor = 'red';
			label.fontColor = 'white';
		}
	});

	rBox.itemTemplate.height = "10%";
	rBox.itemTemplate.fillColor = "red";
	rBox.itemTemplate.add(label_for_repeatbox);

	var label_for_events = create_label_for_events();
  var btn_clear = create_txt_btn_clear(label_for_events);
  var btn_toggle_hide = create_txt_btn_toggle_hide(rBox);
  
  page.add(label_for_events);
  page.add(btn_clear);
  page.add(btn_toggle_hide);

	page.add(rBox);
	App.helpers.txt_btn_back(page, {top: '90%', left: '70%', width: '30%'});
	page.show();

})();
