App.globals = {
	my_hosts:{
		local: {
			device: {
				home: '192.168.0.12',
				work: '192.168.3.84'
			},
			emulator: {
				android: '10.0.2.2',
				genymotion: '10.0.3.2',
				ios: '127.0.0.1'
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

App.globals.environment.setServer = function(target, port){
	var server = '', globals = App.globals, my_hosts = globals.my_hosts;
	if(!port){ port = ''; }
	else if(typeof port === 'number'){
		port = ':' + port;
	}
	switch(target){
		case "home":
			server = my_hosts.local.device.home;
			break;
		case "work":
			server = my_hosts.local.device.work;
			break;
		case "android":
			server = my_hosts.local.emulator.android;
			break;
		case "genymotion":
			server = my_hosts.local.emulator.genymotion;
			break;
		case "ios":
			server = my_hosts.local.emulator.ios;
			break;
		case "c9.smf_experiments":
			server = my_hosts.c9.smf_experiments;
			break;
		case "c9.current":
			server = my_hosts.c9.current;
			break;
		default:
			server = target;
	}
	globals.HOST_URL = 'http://' + server + port;
	globals.APP_URL = globals.HOST_URL + '/';
};

if(typeof App.globals.APP_URL === 'undefined'){
	App.globals.environment.setServer('c9.smf_experiments');	
}