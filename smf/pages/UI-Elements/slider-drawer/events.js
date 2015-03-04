/*globals SMF, Pages, keys*/
(function(){
  
  var pageName = 'UIElementsSliderDrawerEvents', keys = App.keys, generic = App.helpers.generic;
	var page = Pages[pageName] = new SMF.UI.Page({
		fillColor:"wheat",
		onKeyPress: keys.page.onKeyPress
	});
	page.clear();

  var eventNames = ['onControlAdded', 'onControlRemoved', 'onHide', 'onShow'];
  var logger = generic.eventLogGenerator(page);
  var events = generic.generateEventCallbacks(eventNames, logger.log);

  function addHideToSliderDrawer(parent){
    var btn = new SMF.UI.TextButton({
      top: "30%",
      left: "10%",
      text: "Add",
      onPressed: function(){
        if(parent.Label1){
          parent.remove(parent.Label1);
          this.text = 'Add';
        }
        else{
          parent.add(new SMF.UI.Label({ text: 'Added', name: 'Label1', fontColor: 'blue' }));
          this.text = 'Remove';
        }
      }
    });
    parent.add(btn);
    return btn;
  }
  var slider_drawer = new SMF.UI.SliderDrawer(_.extend({
    width : '50%',
    touchEnabled : 'true',
    backgroundColor : 'brown',
    position : 'left'
  }, events));
  page.add(slider_drawer);

  addHideToSliderDrawer(slider_drawer);

	App.helpers.txt_btn_back(page, {top: '90%', left: '60%', width: '30%'});

	page.show();

})();
