App.defaults.android = {
	actionBar: {
		bar: {
			visible: true,
			backgroundColor: App.defaults.colors.headerBlue || 'black',
			itemTextColor: App.defaults.colors.headerWhite || 'orange',
			onHomeIconItemSelected: Pages.back,
			displayShowTitleEnabled: true,
			displayShowHomeEnabled: true,
			displayHomeAsUpEnabled: false
		},
		menuItemBack: {
			id: "itemBack",
			title: '<',
			showAsAction: SMF.UI.Android.ShowAsAction.always,
			onSelected: Pages.back
		},
		menuItemDefaults: {
			showAsAction: SMF.UI.Android.ShowAsAction.ifRoom
		},
		titleView: {
			type: SMF.UI.TitleViewType.text,
			alignment: SMF.UI.Alignment.center
		}
	}
};

App.defaults.header = function actionBar(page, titleHeader, rightItems) {
	var bar = page.actionBar, defs = App.defaults, andr_defs = defs.android, bar_defs = andr_defs.actionBar;

	var titleView = _.extend({}, bar_defs.titleView, {
		text: titleHeader,
		width: '30%',
		textSize: 18,
		left: 0,
		top: 10
	});
	
	var menuBack = new SMF.UI.Android.MenuItem(_.extend({}, bar_defs.menuItemBack));
	var actionbarItems = [menuBack];
	
	if(rightItems && rightItems.length > 0){
		actionbarItems = _.each(rightItems, function(item){
			var rightItem = new SMF.UI.Android.MenuItem(_.extend({}, bar_defs.menuItemDefaults, item));
			actionbarItems.push(rightItem);
		});
	}

	_.each(_.extend({}, bar_defs.bar, {
		titleView: titleView,
	}), function(val, key){ bar[key] = val; });
	if(actionbarItems.length > 0){
		bar.menuItems = actionbarItems;
	}
	
	/*var logo = App.images.logo.clone();
	logo.left = '40%';
	logo.width = '20%';
	bar.add(logo);*/
	//bar.logo = App.images.url.header;
	//bar.backgroundImage = App.images.url.header;
};
