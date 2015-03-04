App.helpers.generic.generateEventCallbacks = function(eventNames, callback){
	var events = {};
	_.each(eventNames, function(eventName) {
  	events[eventName] = function(e){
  		callback(eventName);
  	};
	});
	return events;
};