/*globals load, include*/
//alert('hello');
function displayByLimit(controls, limit){
	limit = limit || 10;
	if(!(controls instanceof Array)){
		controls = _.keys(controls);
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
	for(i = end; i > begin - 1; i--){
		parent.remove(parent.controls[i]);
	}
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


//if(typeof globals === 'undefined'){
globals = {
	my_hosts:{
		local: {
			device: {
				home: '192.168.0.12',
				work: '192.168.3.84'
			},
			emulator: '10.0.2.2',
			genymotion: '10.0.3.2'
		},
		c9:{
			fastDebug: 'smartfacefastdebug-serkanserttop-smf.c9.io'
		}
	},
	environment: {
		location: 'local', //cdn, bundle -- bundled with the app
		state : 'dev' //production, test
	}
};
//}
//globals.HOST_URL = 'http://' + globals.my_hosts.device.work;
globals.HOST_URL = 'http://' + globals.my_hosts.local.emulator;
globals.APP_URL = globals.HOST_URL + '/smartface/';
//globals.HOST_URL = 'http://' + globals.my_hosts.c9.fastDebug;

//Pages.Page1.ScrollView.clear();
/*
(function (){
	Pages.Sliders.clear();
	//add Pages.Slider
	var page = Pages.Sliders = new SMF.UI.Page({
		name: 'Sliders',
		onKeyPress: keys.page.onKeyPress,
		onKeyPressed: keys.page.onKeyPress
	});

	var txtBtn = new SMF.UI.TextButton({
		text: 'Sliders',
		onPressed: function(){
			page.show();
		}
	});
	Pages.Page1.ScrollView.add(txtBtn);

	var container = new SMF.UI.Container({
		top: '10%',
		left: '10%',
		width: '80%',
		height: '80%',
		contentHeight: '100%',
		contentWidth: '100%'
	});
	Pages.Sliders.add(container);

	var slider = new SMF.UI.Slider({
    top: "10%",
    left: "10%",
    valueRangeMin: 0,
    valueRangeMax: 100,
    value: 50, //gives initial value
    stepSize: 5,
    showThumbnail: false
	});
	container.add(slider);

})();
*/

//include(globals.APP_URL + '/addPages.js');
//alert('hello local development');
/*
if(typeof _ === 'undefined' || typeof Backbone === 'undefined'){
	if(globals.environment.location === 'local'){
		load(globals.APP_URL + 'scripts/third-party/underscore-min.js');
		load(globals.APP_URL + 'scripts/third-party/backbone-min.js');
	}
	else if(globals.environment.location === 'cdn'){
		load('http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore.js');
		load('http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js');
	}	
}
*/
//alert(Pages.Page1.name);
//alert( ( Pages.Page1.controls instanceof Array ) );
//alert(Pages.Page1.controls.length);

//Pages.
//Pages.Page1.add()
//var controls = _.keys(Pages.Page1.controls[0]);
//Pages.Page1.ScrollView.Editbox.fillColor = 'red';

//displayByLimit(Pages.Page1);
//displayByLimit(Pages.Page1.controls[0]);
//displayByLimit(Pages.Page1.ScrollView.controls[0])
/*

*/
/*_.each(controls, function(str){
	alert(str);
});*/
