function Caracteristica(gpc, inicio, fin) {
	this.gpc = gpc;
	this.inicio = inicio;
	this.fin = fin;
}

var caracteristicasProteina = [new Caracteristica("GP1", 1, 501), new Caracteristica("sGP", 1, 364), new Caracteristica("GP2", 502, 676), new Caracteristica("GP2 DELTA", 502, 637), new Caracteristica("RECEPTOR BINDING", 54, 201), new Caracteristica("MUCIN LIKE REGION", 305, 485), new Caracteristica("MFL", 393, 556), new Caracteristica("PEPTIDE FUSION", 524, 539)];

$(document).ready(function () {
	var tabla = $("table.tablaProteinas");
	tabla.html("<tr><th>GP Completa</th><th>Inicio</th><th>Final</th></tr>");
	for (var ii = 0; ii < 8; ii++) {
		var builtHtml = "<tr><td>" + caracteristicasProteina[ii].gpc + "</td><td>" + caracteristicasProteina[ii].inicio + "</td><td>" + caracteristicasProteina[ii].fin + "</td></tr>";
		tabla.html(tabla.html() + builtHtml);
	}
});

var ANCHO = 70;
var ANCHOTOTAL = 80;
var ESPACIADO = 5;
var RADIO = 10;


function init() {
	// Crear el stage para dibujar sobre él
	var stage = new createjs.Stage("demoCanvas");
	var i = -1;
	var GP1 = new createjs.Container();
	var r = new createjs.Shape();
	i++;
	
	var MAINGP = new createjs.Container();
	var GPSHAPE = new createjs.Shape();
	GPSHAPE.graphics.beginFill("#cab2d6").drawRoundRect(0, ESPACIADO, 700, ANCHO, RADIO);
	var GPLABEL = new createjs.Text("GP", "bold 14px Arial", "#000000");
	GPLABEL.textAlign = "center";
	GPLABEL.y = ANCHOTOTAL/2 - 7;
	GPLABEL.x = 350;
	
	r.graphics.beginFill(getColor(i)).drawRoundRect(caracteristicasProteina[i].inicio, ANCHOTOTAL + ESPACIADO, caracteristicasProteina[i].fin - caracteristicasProteina[i].inicio, ANCHO, RADIO);
	var label = new createjs.Text(caracteristicasProteina[i].gpc, "bold 14px Arial", "#000000");
	label.textAlign = "center";
	label.y = ANCHOTOTAL + ANCHOTOTAL/2 - 7;
	label.x = 250;

	var sGP = new createjs.Container();
	var r2 = new createjs.Shape();
	i++;
	r2.graphics.beginFill(getColor(i)).drawRoundRect(caracteristicasProteina[i].inicio, ANCHOTOTAL*2 + ESPACIADO, caracteristicasProteina[i].fin - caracteristicasProteina[i].inicio, ANCHO, RADIO);
	var label2 = new createjs.Text(caracteristicasProteina[i].gpc, "bold 14px Arial", "#000000");
	label2.textAlign = "center";
	label2.y = ANCHOTOTAL*2 + ANCHOTOTAL/2 - 7;
	label2.x = 182;
	
	var GP2 = new createjs.Container();
	var r3 = new createjs.Shape();
	i++;
	r3.graphics.beginFill(getColor(i)).drawRoundRect(caracteristicasProteina[i].inicio, ANCHOTOTAL + ESPACIADO, caracteristicasProteina[i].fin-caracteristicasProteina[i].inicio, ANCHO, RADIO);
	var label3 = new createjs.Text(caracteristicasProteina[i].gpc, "bold 14px Arial", "#000000");
	label3.textAlign = "center";
	label3.y = ANCHOTOTAL + ANCHOTOTAL/2 - 7;
	label3.x = 586;
	
	var GP2Delta = new createjs.Container();
	var r4 = new createjs.Shape();
	i++;
	r4.graphics.beginFill(getColor(i)).drawRoundRect(caracteristicasProteina[i].inicio, ANCHOTOTAL*4 + ESPACIADO, caracteristicasProteina[i].fin-caracteristicasProteina[i].inicio, ANCHO, RADIO);
	var label4 = new createjs.Text(caracteristicasProteina[i].gpc, "bold 14px Arial", "#000000");
	label4.textAlign = "center";
	label4.y = ANCHOTOTAL*4 + ANCHOTOTAL/2 - 7;
	label4.x = (637 - 502) + 435;
	
	var Receptor = new createjs.Container();
	var r5 = new createjs.Shape();
	i++;
	r5.graphics.beginFill(getColor(i)).drawRoundRect(caracteristicasProteina[i].inicio, ANCHOTOTAL*3 + ESPACIADO, caracteristicasProteina[i].fin - caracteristicasProteina[i].inicio, ANCHO, RADIO);
	var label5 = new createjs.Text(caracteristicasProteina[i].gpc, "bold 14px Arial", "#000000");
	label5.textAlign = "center";
	label5.y = ANCHOTOTAL*3 + ANCHOTOTAL/2 - 7;
	label5.x = (201 - 54) - 20;
	
	var Mucin = new createjs.Container();
	var r6 = new createjs.Shape();
	i++;
	r6.graphics.beginFill(getColor(i)).drawRoundRect(caracteristicasProteina[i].inicio, ANCHOTOTAL*4 + ESPACIADO, caracteristicasProteina[i].fin -305, ANCHO , RADIO);
	var label6 = new createjs.Text(caracteristicasProteina[i].gpc, "bold 14px Arial", "#000000");
	label6.textAlign = "center";
	label6.y = ANCHOTOTAL*4 + ANCHOTOTAL/2 - 7;
	label6.x = 395;
	
	var MFL = new createjs.Container();
	var r7 = new createjs.Shape();
	i++;
	r7.graphics.beginFill(getColor(i)).drawRoundRect(caracteristicasProteina[i].inicio, ANCHOTOTAL*2 + ESPACIADO, caracteristicasProteina[i].fin - caracteristicasProteina[i].inicio, ANCHO , RADIO);
	var label7 = new createjs.Text(caracteristicasProteina[i].gpc, "bold 14px Arial", "#000000");
	label7.textAlign = "center";
	label7.y = ANCHOTOTAL*2 + ANCHOTOTAL/2 - 7;
	label7.x = 473;
	
	var PEPTIDE = new createjs.Container();
	var r8 = new createjs.Shape();
	i++;
	r8.graphics.beginFill(getColor(i)).drawRoundRect(caracteristicasProteina[i].inicio, ANCHOTOTAL*3 + ESPACIADO, caracteristicasProteina[i].fin - caracteristicasProteina[i].inicio, ANCHO , RADIO);
	var label8 = new createjs.Text(caracteristicasProteina[i].gpc, "bold 14px Arial", "#000000");
	label8.textAlign = "center";
	label8.y = ANCHOTOTAL*3 + ANCHOTOTAL/2 - 7;
	label8.x = 520;
	
	MAINGP.addChild(GPSHAPE, GPLABEL);
	GP1.addChild(r, label);
	sGP.addChild(r2, label2);
	GP2.addChild(r3, label3);
	GP2Delta.addChild(r4, label4);
	Receptor.addChild(r5, label5);
	Mucin.addChild(r6, label6);
	MFL.addChild(r7, label7);
	PEPTIDE.addChild(r8, label8);

	stage.addChild(MAINGP);
	stage.addChild(GP1);
	stage.addChild(sGP);
	stage.addChild(GP2);
	stage.addChild(GP2Delta);
	stage.addChild(Receptor);
	stage.addChild(Mucin);
	stage.addChild(MFL);
	stage.addChild(PEPTIDE);
	
	changeDescription(0);


	// Agregar listener de eventos
	stage.on("stagemousedown", mouseDown);

	// Crear variables para las funciones
	var rec = new createjs.Shape();
	var rec2 = new createjs.Shape();

	stage.addChild(rec);
	stage.addChild(rec2);

	var posIni;
	var posFin;

	function mouseDown(event) {

		rec.graphics.clear();
		rec2.graphics.clear();
		posIni = event.stageX;
		rec.graphics.beginFill("rgba(0, 0, 0, .25").drawRect(0, 0, posIni, 500);


		stage.addChild(rec);


		stage.update();


	};

	stage.on("stagemouseup", mouseMove);


	// Esto sucede al momento de que el click es liberado
	function mouseMove(event) {
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


	GP1.on("click", function (evt) {
		changeDescription(0);
		stage.update();
	});
	
	
	sGP.on("click", function (evt) {
		changeDescription(1);
		stage.update();
	});
	
	GP2.on("click", function (evt) {
		changeDescription(2);
		stage.update();
	});
	
	GP2Delta.on("click", function (evt) {
		changeDescription(3);
		stage.update();
	});
	
	Receptor.on("click", function (evt) {
		changeDescription(4);
		stage.update();
	});
	
	Mucin.on("click", function (evt) {
		changeDescription(5);
		stage.update();
	});
	
	MFL.on("click", function (evt) {
		changeDescription(6);
		stage.update();
	});
	
	PEPTIDE.on("click", function (evt) {
		changeDescription(7);
		stage.update();
	});

	stage.update();

}


filter = function (pos1, pos2) {
	var l = caracteristicasProteina.length;
	var arr = new Array();
	for (var i = 0; i < l; i++) {
		if (caracteristicasProteina[i].fin > pos1 && caracteristicasProteina[i].inicio < pos2) {
			arr.push(caracteristicasProteina[i]);
		}
	}
	return arr;
}

repopulateTable = function (arr) {
	var tabla = $("table.tablaProteinas");
	tabla.html("<tr><th>GP Completa</th><th>Inicio</th><th>Final</th></tr>");
	for (var ii = 0; ii < arr.length; ii++) {
		var builtHtml = "<tr><td>" + arr[ii].gpc + "</td><td>" + arr[ii].inicio + "</td><td>" + arr[ii].fin + "</td></tr>";
		tabla.html(tabla.html() + builtHtml);
	}
}


changeDescription = function (num) {
	var hdr = $("#prothead");
	hdr.html("gpc: " + caracteristicasProteina[num].gpc);
	var section = $("#protpar");
	section.html("<p><hr />start: " + caracteristicasProteina[num].inicio + "<hr />end: " + caracteristicasProteina[num].fin + "</p>");
}

getColor = function(num){
	switch (num){
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