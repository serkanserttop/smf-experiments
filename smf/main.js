/*globals load, include, globals, keys, Pages, Application, SMF, _*/

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
function createPageUrlLoadTextButton(parent, name, url){
	var txtBtn = new SMF.UI.TextButton({
		text: name,
		onPressed: function(){
			include(url);
		}
	});
	parent.add(txtBtn);
}
function createPageLinks(pageName, links, targetName){
	if(!Pages[pageName]){
		Pages[pageName] = new SMF.UI.Page({});
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

	for(var i = 0; i < links.length; i++){
		var row = links[i];
		createPageUrlLoadTextButton(target, row[0], row[1]);
	}
	target.layoutType = SMF.UI.LayoutType.linear;
	target.orientation = SMF.UI.Orientation.vertical;
	target.autosize = true;
}

keys = {
	page: {
		showNavigationBar : true,
		showStatusBar : false,
		touchEnabled : true,
		onKeyPress : function (e) {
			if (e.keyCode === 4) {
				if (this.name === "Page1") {
					Application.exit();
				} else {
					Pages.back();
				}
			}
		}
	},
	editbox: {
		left : "20%",
		width : "60%",
		height : "10%",
		fontColor : "#FFFFFF",
		fillColor : "#C0C0C0",
		text : "",
		textAlignment : SMF.UI.Alignment.center,
	},
	label: {
		minimumFontSize : 10,
		textAlignment : SMF.UI.Alignment.center,
		multipleLine : false
	},
	textbutton: {
		left : "20%",
		width : "60%",
		height : "10%",
		fontColor : "#FFFFFF"
	},
	image: {
		imageFillType : "aspectFit"
	}
};

globals = {
	my_hosts:{
		local: {
			device: {
				home: '192.168.0.12',
				work: '192.168.3.84'
			},
			emulator: {
				android: '10.0.2.2',
				genymotion: '10.0.3.2',
				ios: 'find out'
			}
		},
		c9:{
			current: 'smf-experiments-serkanserttop-smf-2.c9.io',
			smf_experiments: 'smf-experiments-serkanserttop-smf-2.c9.io'
		}
	},
	environment: {
		location: 'local', //cdn, bundle -- bundled with the app
		state : 'dev' //production, test
	}
};

globals.environment.setServer = function(target, port){
	var server = '';
	if(!port){ port = ''; }
	else if(typeof port === 'number'){
		port = ':' + port;
	}
	switch(target){
		case "home":
			server = globals.my_hosts.local.device.home;
			break;
		case "work":
			server = globals.my_hosts.local.device.work;
			break;
		case "android":
			server = globals.my_hosts.local.emulator.android;
			break;
		case "genymotion":
			server = globals.my_hosts.local.emulator.genymotion;
			break;
		case "home":
			server = globals.my_hosts.local.emulator.ios;
			break;
		case "c9.smf_experiments":
			server = globals.my_hosts.c9.smf_experiments;
			break;
		case "c9.current":
			server = globals.my_hosts.c9.current;
			break;
		default:
			server = target;
	}
	globals.HOST_URL = 'http://' + server + port;
	globals.APP_URL = globals.HOST_URL + '/';
};

globals.environment.setServer('c9.smf_experiments');

(function(){
	var pages_url = globals.APP_URL + 'pages/', libs_url = globals.APP_URL + 'libs/', links = [
		['Refresh main.js', globals.APP_URL + 'main.js'],
		['Go To Links', pages_url + 'index.js']
	];
	if(typeof _ === 'undefined'){
		links.push(['Add Underscore', libs_url + 'third-party/underscore-min.js']);
	}
	if(typeof Backbone === 'undefined'){
		links.push(['Add Backbone', libs_url + 'third-party/backbone-min.js']);
	}
	createPageLinks('Page1', links)
	/*removeChildren(Pages.Page1.ScrollView, 2);

	for(var i = 0; i < links.length; i++){
		var row = links[i];
		createPageUrlLoadTextButton(Pages.Page1.ScrollView, row[0], row[1]);
	}*/
})();
