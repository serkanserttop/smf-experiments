/*globals SMF, Pages, keys*/
App.router.define('pages/UI-Elements/webView/ex01', function(page, pageName){
	var webViewPage = new SMF.UI.WebView({
    top: "10%",
    left: "10%",
    URL: "http://developer.smartface.io"
	});

	page.add(webViewPage);
});