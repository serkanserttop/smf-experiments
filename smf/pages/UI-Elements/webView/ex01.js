/*globals SMF, Pages, keys*/
(function(){
	var pageName = 'UIElementsWebViewEx01', keys = App.keys;
	var page = Pages[pageName] = new SMF.UI.Page({
		onKeyPress: keys.page.onKeyPress
	});
	page.clear();

	var webViewPage = new SMF.UI.WebView({
    top: "10%",
    left: "10%",
    URL: "http://developer.smartface.io"
	});

	page.add(webViewPage);

	page.show();
})();
