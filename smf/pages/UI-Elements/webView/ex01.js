/*globals SMF, Pages, keys*/
(function(){
	var pageName = 'UIElementsWebViewEx01', defaults = App.defaults;
	var page = new SMF.UI.Page({
    name: pageName,
		onKeyPress: defaults.page.onKeyPress
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
