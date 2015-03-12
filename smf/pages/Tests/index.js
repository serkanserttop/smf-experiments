/*globals globals, App.helpers*/
(function(){
	var globals = App.globals, pages_url = 'pages/Tests/', libs_url = globals.APP_URL + 'libs/', links = [
		['Test Dotted Page Name', globals.APP_URL + pages_url + 'test-dotted.js'],
		['Test values', globals.APP_URL + pages_url + 'values.js'],
		['Test Dotted with navigate v1', function(){
			App.router.navigate(pages_url + 'test-dotted-define');
		}],
		['Test Dotted with includeIfStringElseExecute', function(){
			var pageName = pages_url + 'test-dotted-define'; var url = globals.APP_URL + pageName + '.js'; return url;
			}, function(){ Pages[pages_url + 'test-dotted-define'].show(); }
		],
		['Test Dotted with navigate', globals.APP_URL + pages_url + 'test-dotted-define.js', function(){
			//Pages[pages_url + 'test-dotted-define'].show();
			Pages['pages/Tests/test-dotted-define'].show();
		}],
		['Show pages_url + test-dotted-define', function(){ Pages[pages_url + 'test-dotted-define'].show(); }],
		['Show Page Names', function(){
			var pages = Object.keys(Pages);
			alert(pages.join(','));
		}]
	];
	App.helpers.createPageLinksAndShow('UITestsIdx', links);
})();