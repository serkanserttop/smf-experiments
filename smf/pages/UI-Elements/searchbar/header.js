/*globals SMF, Pages, keys*/
(function(){
  var pageName = 'UIElementsSearchBarHeader', keys = App.keys;
	var page = Pages[pageName] = new SMF.UI.Page({
		fillColor:"red",
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
		fillColor: 'black',
		fontColor: 'orange',
		backgroundTransparent: false
	});
	var rBox = new SMF.UI.RepeatBox({
		width : "80%",
		height : "100%",
		left : 0,
		top : "0",
		dataSource : static_array,
		showScrollbar : true,
		onRowRender: function onRowRender(e){
			this.controls[0].text = e.rowData.lang;
		}
	});

	rBox.itemTemplate.height = "10%";
	rBox.itemTemplate.add(label_for_repeatbox);

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

	var search_bar = new SMF.UI.SearchBar(_.extend({
		placeHolder: "Enter Name",
		top: "10%",
		left: "10%",
		width: "100%"
		,text: "" //iOS fix for unwanted quotes
		,onTextChange: function(e){
			var search_key = this.text;
			var results = _.filter(static_array, function(obj){ return obj.lang.indexOf(search_key) !== -1; });
			rBox.dataSource = results;
			rBox.refresh();
		}
	}, headerDeviceSpecific));

	page.add(rBox);
	App.helpers.txt_btn_back(page, {top: '90%', left: '60%', width: '30%'});

	page.add(search_bar);
	page.show();

})();
