/*globals Pages*/
function Router(opts){
	this.environment = opts.environment || 'development';
	this.app_url = opts.app_url || '';
};
Router.prototype.define = function(pageName, callback){
	if(typeof Pages[pageName] !== 'undefined'){
		Pages[pageName].clear();
	}
	else{
		Pages[pageName] = new SMF.UI.Page();
	}
	var self = this;
	if(callback){
		callback(pageName);
	}
	else{
		var url = self.app_url + pageName + '.js';
		self.include(url);
	}
};
Router.prototype.flat_directory_replacer = function(url){
	if(this.app_url === ''){
		url = url.replace('/', '_$_');
	}
	return url;
};
Router.prototype.include = function(url){
	url = this.flat_directory_replacer(url);
	include(url);
};
Router.prototype.load = function(url){
	url = this.flat_directory_replacer(url);
	load(url);
};
Router.prototype.navigate = function(pageName){
	var self = this;
	if(this.environment !== 'production'){
		if(typeof this.routes[pageName] === 'undefined'){
			this.define(pageName);
		}
	}
	Pages[pageName].show();
};