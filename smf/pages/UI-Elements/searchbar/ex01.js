/*globals SMF, Pages, keys*/
(function(){
  var pageName = 'UIElementsSearchBarEx01', keys = App.keys;
	var page = Pages[pageName] = new SMF.UI.Page({
		fillColor:"red",
		onKeyPress: keys.page.onKeyPress
	});
	page.clear();

	//var search_bar = new SMF.UI.SearchBar({
	var search_bar = new SMF.UI.SearchBar({
		placeHolder: "Enter Name",
		/*onTextChange: function(){
			page.sbar.hide();
		},*/
		//stickToNavigationBar: true,
		top: "10%",
		left: "10%",
		width: "80%",
		//height: "80%",
		text: "Search here"
	});
	

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
	App.helpers.txt_btn_back(page, {top: '60%', left: '10%'});
	page.add(search_bar);
	page.show();
	//search_bar.hide();
})();
