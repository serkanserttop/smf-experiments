/*globals SMF, App*/
App.router.define('pages/UI-Elements/repeatbox/events', function(page, pageName){
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
  
  function create_label_for_events(){
    var label = new SMF.UI.Label({
    	text: '',
      multipleLine: true,
      showScrollBar: true,
      textAlignment: 'topLeft',
      autoSize: false,
      top: '10%',
      height: '60%',
      width: '40%',
      left: '50%'
    });
    return label;
  }
  
	var defaults = App.defaults;
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

	var eventNames = [
		'onHide', 'onLongTouch', 'onPullDown', 'onPullUp', 
		'onRowDeleted', 'onRowDeleting', 'onSelectedItem', 'onSelectionChanged',
		'onShow', 'onSwipe', 'onTouch', 'onTouchEnded'
	];
	var events = {};
	_.each(eventNames, function(eventName){
		events[eventName] = function(){
			logNewEvent(eventName);
		};
	});
	var rBox = new SMF.UI.RepeatBox(_.extend({}, events, {
		width : "50%",
		height : "100%",
		left : 0,
		top : 0,
		dataSource : static_array,
		showScrollbar : true,
		enablePullDownToRefresh: true,
		enablePullUpToRefresh: true,
		//onScroll: function(e){ logNewEvent('onScroll'); },
		onRowRender: function(e){
			var label = this.controls[0];
			label.text = e.rowData.lang;	
			label.fillColor = 'red';
			label.fontColor = 'white';
		}
	}));

	rBox.itemTemplate.height = "10%";
	rBox.itemTemplate.fillColor = "red";
	rBox.itemTemplate.add(label_for_repeatbox);

	var label_for_events = create_label_for_events();
  
  _.each([label_for_events, rBox], function(item){ page.add(item); });
	
	page.onShow = function(){
		var clear_btn = {
			title: 'Clear',
      onSelected: function(e){
        label_for_events.text = '';
      }
		};
		var hide_btn = {
			title: 'Hide',
      onSelected: function(e){
        var visible = rBox.visible;
        var txt = (visible) ? 'Show' : 'Hide';
        rBox.visible = !visible;
        this.text = txt;
      }
		};
		App.defaults.header(page, pageName, [clear_btn, hide_btn]);
	};
});
