/*globals SMF, Pages, keys*/
(function(){
  
  var pageName = 'UIElementsSearchBarEvents', keys = App.keys, generic = App.helpers.generic;
	var page = Pages[pageName] = new SMF.UI.Page({
		fillColor: "wheat",
		onKeyPress: keys.page.onKeyPress
	});
	page.clear();

	var headerDeviceSpecific;
	if(Device.deviceOS === "Android"){
		headerDeviceSpecific = {
			actionView: true,
			setActionView: true
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
	
	var eventNames = ['onCancel', 'onSearchStart', 'onSearchSubmit', 'onTextChange'];
  var logger = generic.eventLogGenerator(page);
  var events = generic.generateEventCallbacks(eventNames, logger.log);

	var search_bar = new SMF.UI.SearchBar(_.extend({
		placeHolder: "Enter Name",
		top: "0",
		left: "10%",
		height: '10%',
		width: "100%"
		,text: "asd" //iOS fix for unwanted quotes
	}, headerDeviceSpecific, events));

	App.helpers.txt_btn_back(page, {top: '90%', left: '60%', width: '30%'});

	page.add(search_bar);
	page.show();

})();
