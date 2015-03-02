function require(){
	var scripts = {};

	function attach(route, callback){
		scripts[route] = callback;
	}
	function execute(route){
		var callback = scripts[route];
		if(typeof callback === 'function'){
			callback();
		}
	}
	function getKeys(){
		return Object.keys(scripts);
	}
	return {
		attach: attach,
		execute: execute,
		getKeys: getKeys
	}
}
require = require();