/*globals SMF, Pages, keys*/
App.router.define('pages/UI-Elements/repeatbox/ex01', function(page, pageName){
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
		height : "100%",
		top: 0,
		fillColor: 'black', //gormuyor
		fontColor: 'orange',
		backgroundTransparent: false
		//multipleLine: true
	});
	var rBox = new SMF.UI.RepeatBox({
		width : "80%",
		height : "100%",
		left : 0,
		top : "0",
		dataSource : static_array,
		showScrollbar : true,
		onRowRender: function onRowRender(e){
			this.controls[0].text = e.rowData.lang;
			//this.controls[0].fillColor = '#ff0000'; //gormuyor
			//this.controls[0].text = Data.Dataset1.row;
			//alert(Object.keys(e));
		}
	});

	rBox.itemTemplate.height = "10%";
	//rBox.itemTemplate.alignment = "10%";
	//rBox.itemTemplate.fillColor = "red";
	//rBox.itemTemplate.imageFillType = SMF.UI.ImageFillType.stretch;
	rBox.itemTemplate.add(lbl);

	page.add(rBox);
	page.onShow = function(){
		App.defaults.header(page, pageName);
	};
});
