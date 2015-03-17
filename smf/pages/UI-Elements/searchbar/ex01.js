/*globals SMF, Pages, keys*/
App.router.define('pages/UI-Elements/searchbar/ex01', function(page, pageName){
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

	var searchBarDeviceSpecific;
	if(Device.deviceOS === "Android"){
		searchBarDeviceSpecific = {
			//,icon: 'find appropriate icon'
		};
	}
	else{
		searchBarDeviceSpecific = {
			barStyle: SMF.UI.SearchBarStyle.blackOpaque,
			setShowsCancel: true,
			stickToNavigationBar: true,
			tintColor: 'yellow'
		};
	}

	var search_bar = new SMF.UI.SearchBar(_.extend({
		placeHolder: "Enter Name",
		top: "0",
		left: "50%",
		height: '10%',
		width: "100%",
		text: "" //iOS fix for unwanted quotes
	}, searchBarDeviceSpecific));

	var pageTxtBtnShow = new SMF.UI.TextButton({
		top: "30%",
		left: "30%",
		width: "50%",
		text: "Show Search Bar",
		onPressed: function(){
			search_bar.show();
		}
	});

	var pageTxtBtnHide = new SMF.UI.TextButton({
		top: "40%",
		left: "30%",
		width: "50%",
		text: "Hide Search Bar",
		onPressed: function(){
			search_bar.hide();
		}
	});

	var pageTxtBtnCancel = new SMF.UI.TextButton({
		top: "50%",
		left: "30%",
		width: "50%",
		text: "Cancel Search Bar",
		onPressed: function(){
			search_bar.cancel();
		}
	});

	page.add(pageTxtBtnShow);
	page.add(pageTxtBtnHide);
	page.add(pageTxtBtnCancel);

	page.add(search_bar);
	page.onShow = function(e){
		App.defaults.header(page, pageName);
	};
});