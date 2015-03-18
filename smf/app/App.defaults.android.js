App.defaults.android = {
	actionBar: {
		bar: {
			backgroundImage: App.images.url.headerBack,
			visible: true,
			//backgroundColor: App.defaults.colors.headerBlue || 'black',
			//displayShowTitleEnabled: true,
			itemTextColor: App.defaults.colors.headerWhite || 'orange'
		},
		home: {
			displayShowHomeEnabled: true,
			//icon: "icon_home.png",
			displayHomeAsUpEnabled: true,
			onHomeIconItemSelected: Pages.back
		},
		menuItemDefaults: {
			showAsAction: SMF.UI.Android.ShowAsAction.ifRoom
		},
		devUpdateScripts:{
			showAsAction: SMF.UI.Android.ShowAsAction.never,
			title: 'Update',
      onSelected: function(e){
        App.helpers.updateScripts();
      }
		},
		titleViewText: {
			type: SMF.UI.TitleViewType.text,
			alignment: SMF.UI.Alignment.center
		}
	}
};

App.defaults.header = function actionBar(page, titleHeader, rightItems) {
	var bar = page.actionBar, defs = App.defaults, andr_defs = defs.android, bar_defs = andr_defs.actionBar;

	var titleView;
	if(true || !titleHeader){
		titleView = {
			type: SMF.UI.TitleViewType.image,
			image: 'smf-logo.png'
		}
	}
	else{
		titleView = _.extend({}, bar_defs.titleViewText, {
			text: titleHeader,
			width: '30%',
			textSize: 18,
			left: 0,
			top: 10
		});
	}

	var actionbarItems = [];
	rightItems = rightItems || [];
	rightItems.push(bar_defs.devUpdateScripts);
	
	if(rightItems && rightItems.length > 0){
		_.each(rightItems, function(item){
			var rightItem = new SMF.UI.Android.MenuItem(_.extend({}, bar_defs.menuItemDefaults, item));
			actionbarItems.push(rightItem);
		});
	}

	_.each(_.extend({}, bar_defs.bar, bar_defs.home, {
		//titleView: titleView,
	}), function(val, key){ bar[key] = val; });
	if(actionbarItems.length > 0){
		bar.menuItems = actionbarItems;
	}
	
	/*var logo = App.images.logo.clone();
	logo.left = '40%';
	logo.width = '20%';
	bar.add(logo);*/
	//bar.logo = App.images.url.headerBack;
};
