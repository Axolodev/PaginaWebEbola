var genomaData = [{
		"Gen": "NP",
		"Start": 470,
		"End": 2689
	},
	{
		"Gen": "VP35",
		"Start": 3130,
		"End": 4152
	},
	{
		"Gen": "VP40",
		"Start": 4480,
		"End": 5460
	},
	{
		"Gen": "GP",
		"Start": 6041,
		"End": 8071
	},
	{
		"Gen": "VP30",
		"Start": 8512,
		"End": 9378
	},
	{
		"Gen": "VP24",
		"Start": 10349,
		"End": 11104
	},
	{
		"Gen": "L",
		"Start": 11585,
		"End": 18223
	}];



const GENOMACOUNT = genomaData.length;

$(document).ready(function () {
	var tabla = $("table.tablaGenomas");
	tabla.html("<tr><th>Gen</th><th>Range</th></tr>");

	
	for (var ii = 0; ii < GENOMACOUNT; ii++) {
		var builtHtml = "<tr><td>" + genomaData[ii].Gen + "</td><td>" + genomaData[ii].Start + " - " + genomaData[ii].End+ "</td></tr>";
		tabla.html(tabla.html() + builtHtml);
	}
});


var ANCHO = 80;

var ESPACIADO = 5;
var ANCHOTOTAL = ANCHO + ESPACIADO * 2;
var RADIO = 3;
var TEXT = "12px Arial";
var TEXTCOLOR = "#000000";


function init() {
	// Crear el stage para dibujar sobre él
	var stage = new createjs.Stage("drawingCanvas");

	// Crear variables para las funciones que dibujan rectángulos de selección
	var rec = new createjs.Shape();
	var rec2 = new createjs.Shape();
	var posIni;
	var posFin;
	
	// Lineas de rangos. 
	var lineas = new createjs.Shape();

	// Crear arreglos de containers
	var containers = new Array();
	var shapes = new Array();
	var tags = new Array();

	// Crear GP superior
	var MAINGP = new createjs.Container();
	var GPSHAPE = new createjs.Shape();
	GPSHAPE.graphics.beginFill("#cab2d6").drawRoundRect(0, ESPACIADO, 680, ANCHO, RADIO);
	var GPLABEL = new createjs.Text("FULL GP", TEXT, TEXTCOLOR);
	GPLABEL.textAlign = "center";
	GPLABEL.y = ANCHOTOTAL / 2 - 7;
	GPLABEL.x = 340;

	MAINGP.addChild(GPSHAPE, GPLABEL);
	stage.addChild(MAINGP);
	// Termina creación de GP superior 
	var tempStart, tempEnd;
	for (var z = 0; z < GENOMACOUNT; z++) {
		var j = genomaData[z];
		tempStart = j.Start / 18964 * 680;
		tempEnd = j.End / 18964 * 680
		tags.push(new createjs.Text(j.Gen, TEXT, TEXTCOLOR));
		shapes.push(new createjs.Shape());
		containers.push(new createjs.Container());

		shapes[z].graphics.beginFill(getColor(z)).drawRoundRect(tempStart, ANCHOTOTAL  + ESPACIADO, tempEnd - tempStart, ANCHO, RADIO);

		tags[z].textAlign = "center";

		tags[z].y = ANCHOTOTAL + ANCHOTOTAL / 2 - 6;
		tags[z].x = (tempEnd + tempStart ) / 2;
		containers[z].addChild(shapes[z], tags[z]);
		
		lineas.graphics.beginFill("#000000").drawRect(tempStart + 1, 180, 2, 10);
		lineas.graphics.beginFill("#000000").drawRect(tempEnd - 3, 180, 2, 10);
	}

	for (var j = 0; j < GENOMACOUNT; j++) {
		var z = containers[j];
		stage.addChild(z);
	}
	changeDescription(0);

	// Agregar listener de eventos
	stage.on("stagemousedown", mouseDown);
	stage.on("stagemouseup", mouseUp);

	stage.addChild(rec);
	stage.addChild(rec2);
	stage.addChild(lineas);

	function mouseDown(event) {
		rec.graphics.clear();
		rec2.graphics.clear();
		posIni = event.stageX;
		rec.graphics.beginFill("rgba(0, 0, 0, .25").drawRect(0, 0, posIni, 500);

		stage.addChild(rec);
		stage.update();
	};

	// Esto sucede al momento de que el click es liberado
	function mouseUp(event) {
		rec2.graphics.clear();
		posFin = event.stageX;
		if (posFin > posIni) {
			rec2.graphics.beginFill("rgba(0, 0, 0, .25").drawRect(posFin, 0, 700 - posFin, 500);
			var x = filter(posIni, posFin);
			repopulateTable(x);
		} else {
			rec.graphics.clear();
		}
		stage.addChild(rec2);
		stage.update();
	};

	containers[0].on("click", function (evt) {
		changeDescription(0);
		stage.update();
	});
	containers[1].on("click", function (evt) {
		changeDescription(1);
		stage.update();
	});
	containers[2].on("click", function (evt) {
		changeDescription(2);
		stage.update();
	});
	containers[3].on("click", function (evt) {
		changeDescription(3);
		stage.update();
	});
	containers[4].on("click", function (evt) {
		changeDescription(4);
		stage.update();
	});
	containers[5].on("click", function (evt) {
		changeDescription(5);
		stage.update();
	});
	containers[6].on("click", function (evt) {
		changeDescription(6);
		stage.update();
	});

	stage.update();

}


function filter(pos1, pos2) {
	var arr = new Array();
	for (var i = 0; i < GENOMACOUNT; i++) {
		if (genomaData[i].End / 18964 * 678 > pos1 && genomaData[i].Start / 18964 * 678 < pos2) {
			arr.push(genomaData[i]);
		}
	}
	return arr;
}

function repopulateTable(arr) {
	var tabla = $("table.tablaGenomas");
	l = arr.length;
	tabla.html("<tr><th>Gen</th><th>Range</tr>");
	for (var ii = 0; ii < l; ii++) {
		var builtHtml = "<tr><td>" + arr[ii].Gen + "</td><td>" + arr[ii].Start + " - " + arr[ii].End + "</td></tr>";
		tabla.html(tabla.html() + builtHtml);
	}
}


function changeDescription(num) {
	var hdr = $("#prothead");
	hdr.html("Gen: " + genomaData[num].Gen);
	var section = $("#protpar");
	section.html("<p><hr />Start: " + genomaData[num].Start + "<hr />End: " + genomaData[num].End  + "</p>");
}


function getColor(num) {
	switch (num) {
	case 0:
	case 11:
		return "#a6cee3";
		break;
	case 1:
	case 12:
		return "#1f78b4";
		break;
	case 2:
	case 13:
		return "#b2df8a";
		break;
	case 3:
	case 14:
		return "#33a02c";
		break;
	case 4:
	case 15:
		return "#fb9a99";
		break;
	case 5:
	case 16:
		return "#e31a1c";
		break;
	case 6:
	case 17:
		return "#fdbf6f";
		break;
	case 7:
	case 18:
		return "#cab2d6";
		break;
	case 8:
	case 19:
		return "#6a3d9a";
		break;
	case 9:
	case 20:
		return "#ffff99";
		break;
	case 10:
	case 21:
		return "#b15928";
		break;
	default:
		return "#ff7f00";
		break;
	}
}