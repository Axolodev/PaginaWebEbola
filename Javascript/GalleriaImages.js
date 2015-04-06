var h3Tab = $('#myTab li:eq(0) a');
var G4 = $('#myTab li:eq(1) a');
var F6 = $('#myTab li:eq(2) a');
var UNOTRESTRES = $('#myTab li:eq(3) a');
var GP = $('#myTab li:eq(4) a');
var JP3K = $('#myTab li:eq(5) a');
var KZ52 = $('#myTab li:eq(6) a');
var S9 = $('#myTab li:eq(7) a');

h3Tab.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(0);
});

G4.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(1);
});
F6.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(2);
});
UNOTRESTRES.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(3);
});
GP.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(4);
});
JP3K.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(5);
});
KZ52.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(6);
});
S9.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(7);
});

changeHtmlWithIndex = function (index) {
	var selected;
	var items;
	if (index == 0) {
		selected = $('#1H3');
		items = [
			{image: 'assets/3dMols/1H3/1h3.jpeg'}, 
			{
				image: 'assets/3dMols/1H3/1h32.jpeg'
			},
			{
				image: 'assets/3dMols/1H3/1h33.jpg'
			},
		];
	} else if (index == 1) {
		selected = $('#G4');
	} else if (index == 2) {
		selected = $('#F6');
	} else if (index == 3) {
		selected = $('#UNOTRESTRES');
	} else if (index == 4) {
		selected = $('#GP');
	} else if (index == 5) {
		selected = $('#JP3K');
	} else if (index == 6) {
		selected = $('#KZ52');
	} else if (index == 7) {
		selected = $('#S9');
	}
	selected.html("<div class='galleria'>");
	for(var i = 0 ; i < items.length ; i++){
		var n = items[i];
		selected.html(selected.html() + '<img src="' + n.image + '">');
	}
	selected.html(selected.html() + '</div>');
	 Galleria.loadTheme('Javascript/galleria/themes/classic/galleria.classic.min.js');
	
	Galleria.run('.GalleriaH3');

};