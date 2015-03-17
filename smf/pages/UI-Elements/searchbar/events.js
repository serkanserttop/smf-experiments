/*globals SMF, Pages, keys*/
App.router.define('pages/UI-Elements/searchbar/events', function(page, pageName){
  
  var defaults = App.defaults, generic = App.helpers.generic;

	var headerDeviceSpecific;
	if(Device.deviceOS === "Android"){
		headerDeviceSpecific = {
			//actionView: true,
			//setActionView: true
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
		,text: "" //iOS fix for unwanted quotes
	}, headerDeviceSpecific, events));

	page.add(search_bar);
	page.onShow = function(e){
    var rightBarButtomClear = logger.generic_clear_button;
		App.defaults.header(page, 'SearchBar Events', [rightBarButtomClear]);
	};
});
