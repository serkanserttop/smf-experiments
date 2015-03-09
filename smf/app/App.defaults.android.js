App.defaults.android = {
	actionBar: {
		bar: {
			visible: true,
			backgroundColor: "white",
			onHomeIconItemSelected: Pages.back,
			displayShowTitleEnabled: true,
			displayShowHomeEnabled: true,
			displayHomeAsUpEnabled: false
		},
		menuItemBack: {
			id: "itemBack",
			title: 'BACK',
			showAsAction: SMF.UI.Android.ShowAsAction.always,
			onSelected: Pages.back
		},
		titleView: {
			type: SMF.UI.TitleViewType.text,
			alignment: SMF.UI.Alignment.center
		}
	}
};

App.defaults.header = function actionBar(page, titleHeader, rightItems) {
	var bar = page.actionBar, defs = App.defaults, andr_defs = defs.android, bar_defs = andr_defs.actionBar;

	var titleView = _.extend(bar_defs.titleView, {
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

	_.each(_.extend(bar_defs.bar, {
		titleView: titleView,
		menuItems: actionbarItems
	}), function(val, key){ bar[key] = val; });
};
