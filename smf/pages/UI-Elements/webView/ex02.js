/*globals SMF, Pages, keys*/
(function(){
	function createGenericCleanPage(pageName){
		var keys = App.keys;
		var page = Pages[pageName] = new SMF.UI.Page({
			onKeyPress: keys.page.onKeyPress
		});
		page.clear();
		return page;
	}
	
	var pageWithButton = createGenericCleanPage('UIElementsWebViewEx02');
	var pageWithWebView = createGenericCleanPage('UIElementsWebViewEx02WebView');

	var btn = new SMF.UI.TextButton({
		text: 'Go To WebView',
		onPressed: function(e){
			pageWithWebView.show();
		}
	});

	pageWithButton.add(btn);

	var webViewPage = new SMF.UI.WebView({
    top: "10%",
    left: "10%",
    URL: "http://developer.smartface.io"
	});

	pageWithWebView.add(webViewPage);

	pageWithButton.show();
})();
