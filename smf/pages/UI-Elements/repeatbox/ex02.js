/*globals SMF, Pages, keys*/
(function(){
	var lastRandomNumberIndex = 0;

	function createRandomNumbers(n){
		if(!n){ n = 1; }
		var items = [];
		for(var i = 0; i < n; i ++){
			lastRandomNumberIndex++;
			items.push(lastRandomNumberIndex);
		}
		return items;
	}
	function updateRepeatBoxWithNewItems(repeatBox, items){
		repeatBox.dataSource = items;
		repeatBox.refresh();
		setTimeout(function(){ rBox.closePullItems() } , 50);
	}

	var pageName = 'UIElementsRepeatBoxEx02', defaults = App.defaults;
	var page = new SMF.UI.Page({
    name: pageName,
		fillColor: 'violet',
		onKeyPress: defaults.page.onKeyPress
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
		height : "100%",
		top: 0,
		width: '40%',
		fillColor: 'black',
		fontColor: 'orange',
		backgroundTransparent: false
	});

	var lbl2 = new SMF.UI.Label({
		height : "100%",
		left: '50%',
		top: 0,
		width: '40%',
		fillColor: 'white',
		fontColor: 'blue',
		backgroundTransparent: false
	});

	//var pushed = false;
	var controls = [];

	var rBox = new SMF.UI.RepeatBox({
		width : "80%",
		height : "100%",
		left : 0,
		top : 0,
		dataSource : static_array,
		showScrollbar : true,
		enablePullDownToRefresh: true,
		enablePullUpToRefresh: true,
		onPullUp: function(e){
			updateRepeatBoxWithNewItems(this, rBox.dataSource.concat(createRandomNumbers(10)));
		},
		onPullDown: function(e){
			updateRepeatBoxWithNewItems(this, createRandomNumbers(10).concat(rBox.dataSource));
		},
		onRowRender: function(e){
			var label1 = this.controls[0];
			var label2 = this.controls[1];
			//controls.push(Object.keys(this.controls));
			//var row = this.rows[e.rowIndex];
			//alert(Object.keys(row));
			//e.label.text = 'here';
			//Pages.Page1.repeatbox1.label.text = 'here';
			if(typeof e.rowData.lang !== 'undefined'){
				label1.text = e.rowData.lang;	
				label1.fillColor = 'red';
				label1.fontColor = 'white';
				label2.text = e.rowData.lang;	
				label2.fillColor = 'yellow';
				label2.fontColor = 'blue';
			}
			else{
				label1.text = e.rowData;
				label1.fillColor = 'green';
				label1.fontColor = 'yellow';
				label2.text = e.rowData;
				label2.fillColor = 'blue';
				label2.fontColor = 'pink';
			}
		},
		onSelectedItem: function(e){
			alert("selected item :" + e.rowIndex);
			//alert(controls.join(', '));
		}
	});
	//alert(Object.keys(rBox.itemTemplate))
	//rBox.rows[100].height = 500;
	rBox.itemTemplate.height = "10%";
	rBox.itemTemplate.fillColor = "red";
	rBox.itemTemplate.add(lbl);
	rBox.itemTemplate.add(lbl2);

	page.add(rBox);
	page.show();
	App.defaults.header(page, pageName);
	//alert(page.controls[0].name);
	//alert(Object.keys(page.controls[0].controls[0]));
	//alert(page.controls[0].controls[0].name);
	//alert(page.controls[1].name);
	//alert(Object.keys(page.controls[1]));
})();
