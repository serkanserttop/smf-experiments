/*globals SMF, App*/
App.router.define('pages/UI-Elements/action-bar/ex01', function(page, pageName){
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
		navItem.titleView = _.extend({}, titleViewDefaults, {
			text: titleHeader,
			textColor: 'wheat'
		});

		var backButtonDefaults = {
			title: 'BACK',
			onSelected : Pages.back
		};
		var backItem = new iOS.BarButtonItem(_.extend({}, backButtonDefaults, {
			tintColor: 'pink'
		}));
		
		var leftItems = [backItem];
		navItem.leftBarButtonItems = leftItems;
		
		if(rightItems && rightItems.length > 0){
			navItem.rightBarButtonItems = _.map(rightItems, function(item){
				return (new iOS.BarButtonItem(item));
			});;
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
		var titleView = _.extend({}, titleViewDefaults, {
			text: titleHeader,
			width: '50%',
			textSize: 18,
			textColor: "red",
			left: 0,
			top: 10
		});

		var menuItemHello = new SMF.UI.Android.MenuItem({
			id: "helloWorld",
			title: 'Hello',
			showAsAction: SMF.UI.Android.ShowAsAction.always,
			onSelected: function(){
				alert('Hello MenuItem');
			}
		});

		_.each(_.extend({}, navBarDefaults, {
			titleView: titleView,
			menuItems: [menuItemHello]
		}), function(val, key){ bar[key] = val; });
	}

	var titleHeader = 'Action / Nav Bar Example 1';
	page.onShow = function(e){
		if(Device.deviceOS === 'Android'){
			actionBar(page, titleHeader, {
		    title: 'Android Specific',
		    showAsAction: SMF.UI.Android.ShowAsAction.ifRoom,
		    onSelected: function(e){
		      alert('Android does not need a BACK button');
		    }
		  });
		}
		else{
			navigation(page, titleHeader, {
				title: 'Android Specific',
		    onSelected: function(e){
		      alert('iOS needs a BACK button');
		    }
			});
		}
	}

});
