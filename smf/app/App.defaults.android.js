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
		textColor: "red",
		left: 0,
		top: 10
	});
	
	var actionbarItems = [];
	if(rightItems && rightItems.length > 0){
		actionbarItems = _.map(rightItems, function(item){
			return (new SMF.UI.Android.MenuItem(_.extend({}, bar_defs.menuItemDefaults, item)));
		});
	}

	_.each(_.extend({}, bar_defs.bar, {
		titleView: titleView,
	}), function(val, key){ bar[key] = val; });
	if(actionbarItems.length > 0){
		bar.menuItems = actionbarItems;
	}
};
