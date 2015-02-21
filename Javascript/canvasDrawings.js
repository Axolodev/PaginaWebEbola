function Caracteristica(gpc, inicio, fin, nivel, order) {
	this.gpc = gpc;
	this.inicio = inicio;
	this.fin = fin;
	this.nivel = nivel;
}

var caracteristicasProteina = [new Caracteristica("GP1", 1, 501, 1), new Caracteristica("sGP", 1, 364, 2), new Caracteristica("GP2", 502, 676, 1), new Caracteristica("GP2 DELTA", 502, 637, 4), new Caracteristica("RECEPTOR BINDING", 54, 201, 3), new Caracteristica("MUCIN LIKE REGION", 305, 485, 4), new Caracteristica("MFL", 393, 556, 2), new Caracteristica("PEPTIDE FUSION", 524, 539, 3)];

$(document).ready(function () {
	var tabla = $("table.tablaProteinas");
	tabla.html("<tr><th>Full GP</th><th>Start</th><th>End</th></tr>");
	for (var ii = 0; ii < 8; ii++) {
		var builtHtml = "<tr><td>" + caracteristicasProteina[ii].gpc + "</td><td>" + caracteristicasProteina[ii].inicio + "</td><td>" + caracteristicasProteina[ii].fin + "</td></tr>";
		tabla.html(tabla.html() + builtHtml);
	}
});

var ANCHO = 70;
var ANCHOTOTAL = 80;
var ESPACIADO = 5;
var RADIO = 10;
var TEXT = "bold 14px Arial";
var TEXTCOLOR = "#000000";



function init() {
	// Crear el stage para dibujar sobre él
	var stage = new createjs.Stage("drawingCanvas");
	var GP1 = new createjs.Container();
	var r = new createjs.Shape();

	// Crear variables para las funciones que dibujan rectángulos de selección
	var rec = new createjs.Shape();
	var rec2 = new createjs.Shape();
	var posIni;
	var posFin;

	// Crear arreglos de containers
	var containers = new Array();
	var shapes = new Array();
	var tags = new Array();


	// Crear GP superior
	var MAINGP = new createjs.Container();
	var GPSHAPE = new createjs.Shape();
	GPSHAPE.graphics.beginFill("#cab2d6").drawRoundRect(0, ESPACIADO, 680, ANCHO, RADIO);
	var GPLABEL = new createjs.Text("GP", TEXT, TEXTCOLOR);
	GPLABEL.textAlign = "center";
	GPLABEL.y = ANCHOTOTAL / 2 - 7;
	GPLABEL.x = 340;

	MAINGP.addChild(GPSHAPE, GPLABEL);
	stage.addChild(MAINGP);
	// Termina creación de GP superior 

	for (var z = 0; z < caracteristicasProteina.length; z++) {
		var j = caracteristicasProteina[z];
		tags.push(new createjs.Text(j.gpc, TEXT, TEXTCOLOR));
		shapes.push(new createjs.Shape());
		containers.push(new createjs.Container());

		shapes[z].graphics.beginFill(getColor(z)).drawRoundRect(j.inicio, ANCHOTOTAL * j.nivel + ESPACIADO, j.fin - j.inicio, ANCHO, RADIO);

		tags[z].textAlign = "center";

		tags[z].y = ANCHOTOTAL * j.nivel + ANCHOTOTAL / 2 - 7;
		tags[z].x = (j.fin + j.inicio) / 2;
		containers[z].addChild(shapes[z], tags[z]);

	}

	for (var j = 0; j < caracteristicasProteina.length; j++) {
		var z = containers[j];
		stage.addChild(z);
	}
	changeDescription(0);

	// Agregar listener de eventos
	stage.on("stagemousedown", mouseDown);
	stage.on("stagemouseup", mouseUp);

	stage.addChild(rec);
	stage.addChild(rec2);


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
	containers[7].on("click", function (evt) {
		changeDescription(7);
		stage.update();
	});

	stage.update();

}


function filter(pos1, pos2) {
	var l = caracteristicasProteina.length;
	var arr = new Array();
	for (var i = 0; i < l; i++) {
		if (caracteristicasProteina[i].fin > pos1 && caracteristicasProteina[i].inicio < pos2) {
			arr.push(caracteristicasProteina[i]);
		}
	}
	return arr;
}

function repopulateTable(arr) {
	var tabla = $("table.tablaProteinas");
	tabla.html("<tr><th>Full GP</th><th>Start</th><th>End</th></tr>");
	for (var ii = 0; ii < arr.length; ii++) {
		var builtHtml = "<tr><td>" + arr[ii].gpc + "</td><td>" + arr[ii].inicio + "</td><td>" + arr[ii].fin + "</td></tr>";
		tabla.html(tabla.html() + builtHtml);
	}
}


function changeDescription(num) {
	var hdr = $("#prothead");
	hdr.html("GPC: " + caracteristicasProteina[num].gpc);
	var section = $("#protpar");
	section.html("<p><hr />Start: " + caracteristicasProteina[num].inicio + "<hr />End: " + caracteristicasProteina[num].fin + "</p>");
}

function getColor(num) {
	switch (num) {
	case 0:
		return "#a6cee3";
		break;
	case 1:
		return "#1f78b4";
		break;
	case 2:
		return "#b2df8a";
		break;
	case 3:
		return "#33a02c";
		break;
	case 4:
		return "#fb9a99";
		break;
	case 5:
		return "#e31a1c";
		break;
	case 6:
		return "#fdbf6f";
		break;
	default:
		return "#ff7f00";
		break;
	}
}