App.router.define('pages/UI-Elements/text-button/events', function(page, pageName){
  var defaults = App.defaults, generic = App.helpers.generic;
  
  var eventNames = ['onDoubleTap', 'onLongTouch', 'onPressed', 'onShow', 'onTouch', 'onTouchEnded'];
  var logger = generic.eventLogGenerator(page);
  var events = generic.generateEventCallbacks(eventNames, logger.log);

  var btn = new SMF.UI.TextButton(_.extend({}, {
    top: "10%",
    left: "10%",
    text: "Fire Events"
  }, events));
  page.add(btn);
  
  page.onShow = function(e){
    var rightBarButtomClear = logger.generic_clear_button;
    App.defaults.header(page, 'SearchBar Events', [rightBarButtomClear]);
  };
});