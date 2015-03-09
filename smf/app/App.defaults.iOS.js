App.defaults.iOS = {
	BarButton: {
		back: {
			title: 'BACK',
			onSelected : Pages.back
		}
	},
	NavigationBar: {
		visible: true,
		tintColor: 'white',
		backgroundColor: 'black'
	},
	navigationItem: {
		titleView: {
			type: SMF.UI.TitleViewType.text,
			alignment: SMF.UI.TextAlignment.center
		}
	}
};

App.defaults.header = function(page, titleHeader, rightItems) {
	var iOS = SMF.UI.iOS, navBar = iOS.NavigationBar, navItem = page.navigationItem, defs = App.defaults;

	_.each(defs.iOS.NavigationBar, function(val, key){ navBar[key] = val; });

	navItem.titleView = _.extend(defs.iOS.navigationItem.titleView, {
		text: titleHeader,
		textColor: 'wheat'
	});

	var backItem = new iOS.BarButtonItem(_.extend(defs.iOS.BarButton.back, {
		tintColor: 'pink'
	}));
	
	var leftItems = [backItem];
	navItem.leftBarButtonItems = leftItems;
	
	if(rightItems && rightItems.length > 0){
		navItem.leftBarButtonItems = leftItems;
	}
};
