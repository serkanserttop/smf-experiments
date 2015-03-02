/*globals SMF, Pages, keys*/
(function(){
  var pageName = 'UIElementsSearchBarEx02', keys = App.keys;
	var page = Pages[pageName] = new SMF.UI.Page({
		fillColor:"red",
		onKeyPress: keys.page.onKeyPress
	});
	page.clear();

	var colors = ["red", "blue", "yellow", "black", "green", "aqua"];

	var search_bar = new SMF.UI.SearchBar({
		placeHolder: "Enter Name",
		top: "10%",
		left: "10%",
		width: "80%",
		height: "80%",
		text: "Search here"
	});
	page.add(search_bar);



	/*
	var slider_drawer = new SMF.UI.SliderDrawer({
		width : '30%',
		touchEnabled : 'true',
		backgroundColor : 'green',
		position : 'left'
	});
	page.add(slider_drawer);

	var pageTxtBtnShow = new SMF.UI.TextButton({
		top: "10%",
		left: "30%",
		width: "50%",
		text: "Show Slider Drawer",
		onPressed: function(){
			slider_drawer.show();
		}
	});
	
	var sliderTxtBtnHide = new SMF.UI.TextButton({
		top: "30%",
		left: "10%",
		//width: "15%",
		text: "Hide",
		onPressed: function(){
			slider_drawer.hide();
		}
	});
	page.add(pageTxtBtnShow);
	slider_drawer.add(sliderTxtBtnHide);
	*/
	page.show();
})();

/*
Var mySearch = new SMF.UI.SearchBar();
mySearch.icon = "ic_action_search.png"; // Android Only
Pages.Page1.add(mySearch);
mySearch.actionView = true;
mySearch.text = "",
mySearch.placeHolder = "Search the text";
mySearch.barStyle = SMF.UI.SearchBarStyle.blackOpaque // iOS Only
mySearch.setShowsCancel = true; // iOS Only
mySearch.stickToNavigationBar = true; // iOS Only
*/
