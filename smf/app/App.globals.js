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
			smf_experiments: 'http://smf-experiments-serkanserttop-smf-2.c9.io'
		}
	},
	environment: {
		location: 'local', //cdn, bundle -- bundled with the app
		state : 'development' //production, test
	}
};

App.globals.environment.setServer = function(target, port){
	var server = '', globals = App.globals, my_hosts = globals.my_hosts;
	if(!port){ port = ''; }
	else if(typeof port === 'number'){
		port = ':' + port;
	}
	switch(target){
		case "app":
			server = ''; break;
		case "home":
			server = my_hosts.local.device.home; break;
		case "work":
			server = my_hosts.local.device.work; break;
		case "emulator":
			if(Device.deviceOS === 'Android'){
				server = my_hosts.local.emulator.android;	
			}
			else{
				server = my_hosts.local.emulator.ios;
			}
			break;
		case "genymotion":
			if(Device.deviceOS === 'Android'){
				server = my_hosts.local.emulator.genymotion;	
			}
			else{
				server = my_hosts.local.emulator.ios;
			}
			break;
		case "c9.smf_experiments":
			server = my_hosts.c9.smf_experiments; break;
		case "c9.current":
			server = my_hosts.c9.current; break;
		default:
			server = target;
	}
	if(server !== ''){ App.globals.APP_URL = 'http://' + server + port + '/'; }
	else{ App.globals.APP_URL = ''; }
	App.setConfiguration();
};

App.setConfiguration = function(env, url) {
	App.router = new Router({
		environment: 'development',
		app_url: App.globals.APP_URL
	});
};

if(typeof App.globals.APP_URL === 'undefined'){
	//App.globals.environment.setServer('c9.current');
	App.globals.environment.setServer('emulator', 3000);
}
//App.globals.environment.setServer('emulator', 3000);