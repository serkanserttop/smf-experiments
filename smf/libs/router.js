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
		Pages[pageName] = new SMF.UI.Page({
			onKeyPress: App.defaults.page.onKeyPress
		});
	}
	var self = this;
	if(callback){
		callback(Pages[pageName], pageName);
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
	try{include(url);}
	catch(e){alert(url);Pages.back();}
};
Router.prototype.load = function(url){
	url = this.flat_directory_replacer(url);
	load(url);
};
Router.prototype.navigate = function(pageName){
	var self = this;
	if(typeof Pages[pageName] === 'undefined' || this.environment !== 'production'){
		this.define(pageName);
	}
	//alert('showing page ' + PageName);
	Pages[pageName].show();
};
Router.prototype.navigateGenerator = function(pageName){
	var self = this;
	return function(){ 
		try{
			App.router.navigate(pageName);
			//self.navigate(pageName); does not work?
		}
		catch(e){
			alert(pageName + ' failed to navigate');
		}
	}
}