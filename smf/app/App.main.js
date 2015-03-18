/*globals load*/
var App = {};

//load('App.libs.js');
//load('libs/router.js');
load('App.globals.js');
load('App.images.js');
load('App.defaults.js');
if(Device.deviceOS === 'Android'){
	load('App.defaults.android.js');
}
else{
	load('App.defaults.iOS.js');
}
load('App.helpers.js');
load('App.helpers.generic.js');
load('App.helpers.generic.eventLogGenerator.js');
load('App.pages.js');