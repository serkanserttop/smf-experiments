/*globals SMF, Pages, keys*/

(function(){
	function navigation(page, titleHeader, rightItems) {
		var iOS = SMF.UI.iOS, navBar = iOS.NavigationBar, navItem = page.navigationItem;
		
		var navBarProps = {
			visible: true,
			tintColor: 'white',
			backgroundColor: 'black'
		};
		_.each(navBarProps, function(val, key){ navBar[key] = val; });

		var titleViewDefaults = {
			type: SMF.UI.TitleViewType.text,
			alignment: SMF.UI.TextAlignment.center
		};
		navItem.titleView = _.extend(titleViewDefaults, {
			text: titleHeader,
			textColor: 'wheat'
		});

		var backButtonDefaults = {
			title: 'BACK',
			onSelected : Pages.back
		};
		var backItem = new iOS.BarButtonItem(_.extend(backButtonDefaults, {
			tintColor: 'pink'
		}));
		
		var leftItems = [backItem];
		navItem.leftBarButtonItems = leftItems;
		
		if(rightItems && rightItems.length > 0){
			navItem.leftBarButtonItems = leftItems;
		}
	}

	function actionBar(page, titleHeader, rightItems) {
		var bar = page.actionBar;

		var navBarDefaults = {
			visible: true,
			backgroundColor: "white",
			onHomeIconItemSelected: Pages.back,
			displayShowTitleEnabled: true,
			displayShowHomeEnabled: true,
			displayHomeAsUpEnabled: false
		};

		var titleViewDefaults = {
			type: SMF.UI.TitleViewType.text,
			alignment: SMF.UI.Alignment.center
		};
		var titleView = _.extend(titleViewDefaults, {
			text: titleHeader,
			width: '50%',
			textSize: 18,
			textColor: "red",
			left: 0,
			top: 10
		});

		var menuItemBackDefaults = {
			id: "itemBack",
			title: 'BACK',
			showAsAction: SMF.UI.Android.ShowAsAction.always,
			onSelected: Pages.back
		};
		var itemBack = new SMF.UI.Android.MenuItem(menuItemBackDefaults);

		var menuItemDefaults = {
			showAsAction: SMF.UI.Android.ShowAsAction.ifRoom
		};
		var actionbarItems = [itemBack];

		_.each(_.extend(navBarDefaults, {
			titleView: titleView,
			menuItems: actionbarItems
		}), function(val, key){ bar[key] = val; });
	}

	var pageName = 'UIElementsActionBarEx01';
	var page = new SMF.UI.Page({
    name: pageName,
		onKeyPress: App.defaults.page.onKeyPress
	});
	page.clear();
	
	page.show();

	var titleHeader = 'Action / Nav Bar Example 1';
	if(Device.deviceOS === 'Android'){
		actionBar(page, titleHeader);
	}
	else{
		navigation(page, titleHeader);
	}

})();
