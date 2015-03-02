/*globals SMF, Pages, keys*/
(function(){
	var pageName = 'UIElementsRepeatBoxEx01', keys = App.keys;
	var page = Pages[pageName] = new SMF.UI.Page({
		//fillColor:"red",
		onKeyPress: keys.page.onKeyPress
	});
	page.clear();

	var static_array = [
		{'lang': 'Javascript'},
		{'lang': 'Ruby'},
		{'lang': 'Python'},
		{'lang': 'Java'},
		{'lang': 'Objective-C'},
		{'lang': 'C++'},
		{'lang': 'Golang'}
	];

	var lbl = new SMF.UI.Label({
		height : "20%",
		fillColor: 'green',
		fontColor: 'red'
		//multipleLine: true
	});
	var rBox = new SMF.UI.RepeatBox({
		width : "80%",
		height : "100%",
		left : 0,
		top : "0",
		//dataSource : Data.Dataset1,
		dataSource : static_array,
		showScrollbar : true,
		fillColor : "#3B3B3B",
		onRowRender: function onRowRender(e){
			this.controls[0].text = e.rowData.lang;
			//this.controls[0].text = Data.Dataset1.row;
			//alert(Object.keys(e));
		}
	});

	rBox.itemTemplate.height = "20%";
	//rBox.itemTemplate.imageFillType = SMF.UI.ImageFillType.stretch;
	rBox.itemTemplate.add(lbl);

	//App.helpers.txt_btn_back(page, {top: '60%', left: '10%'});
	page.add(rBox);
	page.show();
	//search_bar.hide();
})();
