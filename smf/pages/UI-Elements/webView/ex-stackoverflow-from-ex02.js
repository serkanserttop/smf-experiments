/*globals SMF, Pages, keys*/
(function(){

	Pages.pageWithButton = new SMF.UI.Page();
	Pages.pageWithWebView = new SMF.UI.Page();
	Pages.pageWithButton.clear();
	Pages.pageWithWebView.clear();

	var btn = new SMF.UI.TextButton({
		text: 'Go To WebView',
		onPressed: function(e){
			Pages.pageWithWebView.show();
		}
	});

	Pages.pageWithButton.add(btn);

	var webViewPage = new SMF.UI.WebView({
    top: "10%",
    left: "10%",
    height: "90%",
    width: "90%",
    URL: "http://developer.smartface.io"
	});

	Pages.pageWithWebView.add(webViewPage);

	Pages.pageWithButton.show();
})();
