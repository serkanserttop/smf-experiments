App.helpers = (function(){
	var globals = App.globals, keys = App.keys;
	function displayByLimit(controls, limit){
		limit = limit || 10;
		if(!(controls instanceof Array)){
			controls = Object.keys(controls);
		}
		var stack = [];
		for(var i = 0; i < controls.length; i++){
			stack.push(controls[i]);
			if((i + 1) % limit === 0){
				alert(stack.join(', '));
				stack = [];
			}
		}
		alert(stack.join(', '));
	}
	function displayTypeAndNameOfControls(controls, start){
		var len = Pages.Page1.ScrollView.controls.length;
		start = start || 0;
		for(var i = start; i < len; i++){
			var ctrl = Pages.Page1.ScrollView.controls[i];
			alert(ctrl.type + ', ' + ctrl.name);
		}
	}
	function removeChildren(parent, start, stop){
		var end = stop || parent.controls.length;
		var begin = start || 0;
		for(var i = end; i > begin - 1; i--){
			parent.remove(parent.controls[i]);
		}
	}
	function createPageUrlLoadTextButton(parent, txt, url){
		var txtBtn = new SMF.UI.TextButton({
			text: txt,
			onPressed: function(){
				if(typeof url === 'function'){
					url();
				}
				else if(typeof url === 'string'){
					include(url);	
				}
			}
		});
		parent.add(txtBtn);
	}
	function createPageLinks(pageName, links, targetName, dontAddBack){
		if(!Pages[pageName]){
			Pages[pageName] = new SMF.UI.Page({
				onKeyPress: keys.page.onKeyPress
			});
		}
		var page = Pages[pageName];
		if(!targetName){
			targetName = 'ScrollView';
		}
		if(page[targetName]){
			page.remove(page[targetName]);
		}
		var target = page[targetName] = new SMF.UI.ScrollView({
			top: "10%",
			left: "10%",
			width: "80%",
			height: "80%",
			contentHeight: "100%",
			contentWidth: "100%"
		});
		page.add(target);
		
		if(!dontAddBack){
			links.push(['Back', function(){ Pages.back(); }]);
		}
		
		for(var i = 0; i < links.length; i++){
			var row = links[i];
			createPageUrlLoadTextButton(target, row[0], row[1]);
		}
		target.layoutType = SMF.UI.LayoutType.linear;
		target.orientation = SMF.UI.Orientation.vertical;
		target.autosize = true;
	}
	function createPageLinksAndShow(pageName, links, targetName, dontAddBack){
		createPageLinks(pageName, links, targetName, dontAddBack);
		Pages[pageName].show();
	}
	function txt_btn_back(parent, obj){
		if(!obj){
			obj = parent;
			parent = false;
		}
		var btn = new SMF.UI.TextButton(
			_.extend({
				text: "Back",
				onPressed: function(e) {
					Pages.back();
				}
			}, obj)
		);
		if(parent){
			parent.add(btn);	
		}
		return btn;
	}
	function refreshMainLinks(){
		var pages_url = globals.APP_URL + 'pages/', libs_url = globals.APP_URL + 'libs/', links = [
			['Refresh main.js', globals.APP_URL + 'main.js'],
			['Set C9', function(){
				var server = (Device.deviceOS === "Android") ? 'android' : 'ios';
				globals.environment.setServer(server, 3000);
				refreshMainLinks();
			}],
			['Set Localhost', function(){
				var server = (Device.deviceOS === "Android") ? 'android' : 'ios';
				globals.environment.setServer(server, 3000);
				refreshMainLinks();
			}],
			['Set Genymotion', function(){
				var server = (Device.deviceOS === "Android") ? 'genymotion' : 'ios';
				globals.environment.setServer(server, 3000);
				refreshMainLinks();
			}],
			['Set Device @Work', function(){
				globals.environment.setServer('work', 3000);
				refreshMainLinks();
			}],
			['Set Device @Home', function(){
				globals.environment.setServer('home', 3000);
				refreshMainLinks();
			}],
			['Go To Links', pages_url + 'index.js']
		];
		if(typeof _ === 'undefined'){
			links.push(['Add Underscore', function(){
				load(libs_url + 'third-party/underscore-min.js');
				refreshMainLinks();
			}]);
		}
		if(typeof Backbone === 'undefined'){
			links.push(['Add Backbone', function(){
				load(libs_url + 'third-party/backbone-min.js');
				refreshMainLinks();
			}]);
		}
		createPageLinks('Page1', links);
	}
	return {
		createPageUrlLoadTextButton: createPageUrlLoadTextButton,
		createPageLinks: createPageLinks,
		createPageLinksAndShow: createPageLinksAndShow,
		displayByLimit: displayByLimit,
		displayTypeAndNameOfControls: displayTypeAndNameOfControls,
		refreshMainLinks: refreshMainLinks,
		removeChildren: removeChildren,
		txt_btn_back: txt_btn_back
	};
})();
