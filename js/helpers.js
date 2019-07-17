var count = 0;

$(document).ready(function(){
	console.log("Document is ready!");
	loadHome();
});

// Movement functions.

function loadDataLinear(){

	$("#homepage").hide(); // Hides homepage.
	$("#parent").html(""); // Reset parent div.

	var container_div = $("<div>");
	$("#parent").append(container_div);

	count = 0;

	var row = $("<div>");
	row.attr('class', "row");
	$("row").html("");
	$(container_div).append(row);

	total = Object.keys(data).length;
	currNum = 1;

	for (d in data){
		var item = data[d];

		for (c in item['movement']){

			if (item['movement'][c] == "linear"){
				count++;
				var container_div = $("<div id='item" + item['id'] +"' class='container_div'>");
				var caption = item.num + item.id;
				container_div.append("<br>" + caption + "<br>");
				var image = $("<img style='width:60%'>").attr("src", item['image_src']);
				container_div.append(image);

				if (currNum <= total){
					currNum++;
					col = $("<div>");
					col.attr("class", "col-md-4");

					$(row).append(col);
					$(col).html(container_div);

				}
			}
		}
	}

	changeCount();

}

var setActiveLinear = function(type){
	console.log("Linear is set active");
	changeHeader('Linear');
	loadDataLinear();
}

function loadDataSpin(){

	$("#homepage").hide(); // Hides homepage.
	$("#parent").html(""); // Reset parent div.

	var container_div = $("<div>");
	$("#parent").append(container_div);

	count = 0;

	var row = $("<div>");
	row.attr('class', "row");
	$("row").html("");
	$(container_div).append(row);

	total = Object.keys(data).length;
	currNum = 1;

	for (d in data){
		var item = data[d];

		for (c in item['movement']){

			if (item['movement'][c] == "spin"){
				count++;
				var container_div = $("<div id='item" + item['id'] +"' class='container_div'>");
				var caption = item.num + item.id;
				container_div.append("<br>" + caption + "<br>");
				var image = $("<img style='width:60%'>").attr("src", item['image_src']);
				container_div.append(image);

				if (currNum <= total){
					currNum++;
					col = $("<div>");
					col.attr("class", "col-md-4");

					$(row).append(col);
					$(col).html(container_div);

				}
			}
		}
	}

	changeCount();

}

var setActiveSpin = function(type){
	console.log("Spin is set active");
	changeHeader('Spin');
	loadDataSpin();
}

function loadDataSequential(){

	$("#homepage").hide(); // Hides homepage.
	$("#parent").html(""); // Reset parent div.

	var container_div = $("<div>");
	$("#parent").append(container_div);

	count = 0;

	var row = $("<div>");
	row.attr('class', "row");
	$("row").html("");
	$(container_div).append(row);

	total = Object.keys(data).length;
	currNum = 1;

	for (d in data){
		var item = data[d];

		for (c in item['movement']){

			if (item['movement'][c] == "sequential"){
				count++;
				var container_div = $("<div id='item" + item['id'] +"' class='container_div'>");
				var caption = item.num + item.id;
				container_div.append("<br>" + caption + "<br>");
				var image = $("<img style='width:60%'>").attr("src", item['image_src']);
				container_div.append(image);

				if (currNum <= total){
					currNum++;
					col = $("<div>");
					col.attr("class", "col-md-4");

					$(row).append(col);
					$(col).html(container_div);

				}
			}
		}
	}

	changeCount();

}

var setActiveSequential = function(type){
	console.log("Sequential is set active");
	changeHeader('Sequential');
	loadDataSequential();
}

function loadDataGradient(){

	$("#homepage").hide(); // Hides homepage.
	$("#parent").html(""); // Reset parent div.

	var container_div = $("<div>");
	$("#parent").append(container_div);

	count = 0;

	var row = $("<div>");
	row.attr('class', "row");
	$("row").html("");
	$(container_div).append(row);

	total = Object.keys(data).length;
	currNum = 1;

	for (d in data){
		var item = data[d];

		for (c in item['movement']){

			if (item['movement'][c] == "gradient"){
				count++;
				var container_div = $("<div id='item" + item['id'] +"' class='container_div'>");
				var caption = item.num + item.id;
				container_div.append("<br>" + caption + "<br>");
				var image = $("<img style='width:60%'>").attr("src", item['image_src']);
				container_div.append(image);

				if (currNum <= total){
					currNum++;
					col = $("<div>");
					col.attr("class", "col-md-4");

					$(row).append(col);
					$(col).html(container_div);

				}
			}
		}
	}

	changeCount();

}

var setActiveGradient = function(type){
	console.log("Gradient is set active");
	changeHeader('Gradient');
	loadDataGradient();
}

function loadDataExpand(){

	$("#homepage").hide(); // Hides homepage.
	$("#parent").html(""); // Reset parent div.

	var container_div = $("<div>");
	$("#parent").append(container_div);

	count = 0;

	var row = $("<div>");
	row.attr('class', "row");
	$("row").html("");
	$(container_div).append(row);

	total = Object.keys(data).length;
	currNum = 1;

	for (d in data){
		var item = data[d];

		for (c in item['movement']){

			if (item['movement'][c] == "expand"){
				count++;
				var container_div = $("<div id='item" + item['id'] +"' class='container_div'>");
				var caption = item.num + item.id;
				container_div.append("<br>" + caption + "<br>");
				var image = $("<img style='width:60%'>").attr("src", item['image_src']);
				container_div.append(image);

				if (currNum <= total){
					currNum++;
					col = $("<div>");
					col.attr("class", "col-md-4");

					$(row).append(col);
					$(col).html(container_div);

				}
			}
		}
	}

	changeCount();

}

var setActiveExpand = function(type){
	console.log("Expand is set active");
	changeHeader('Expand');
	loadDataExpand();
}

function loadDataInfinite(){

	$("#homepage").hide(); // Hides homepage.
	$("#parent").html(""); // Reset parent div.

	var container_div = $("<div>");
	$("#parent").append(container_div);

	count = 0;

	var row = $("<div>");
	row.attr('class', "row");
	$("row").html("");
	$(container_div).append(row);

	total = Object.keys(data).length;
	currNum = 1;

	for (d in data){
		var item = data[d];

		for (c in item['looping']){

			if (item['looping'][c] == "infinite"){
				count++;
				var container_div = $("<div id='item" + item['id'] +"' class='container_div'>");
				var caption = item.num + item.id;
				container_div.append("<br>" + caption + "<br>");
				var image = $("<img style='width:60%'>").attr("src", item['image_src']);
				container_div.append(image);

				if (currNum <= total){
					currNum++;
					col = $("<div>");
					col.attr("class", "col-md-4");

					$(row).append(col);
					$(col).html(container_div);

				}
			}
		}
	}

	changeCount();

}

var setActiveInfinite = function(type){
	console.log("Infinite is set active");
	changeHeader('Infinite');
	loadDataInfinite();
}

function loadDataExit(){

	$("#homepage").hide(); // Hides homepage.
	$("#parent").html(""); // Reset parent div.

	var container_div = $("<div>");
	$("#parent").append(container_div);

	count = 0;

	var row = $("<div>");
	row.attr('class', "row");
	$("row").html("");
	$(container_div).append(row);

	total = Object.keys(data).length;
	currNum = 1;

	for (d in data){
		var item = data[d];

		for (c in item['looping']){

			if (item['looping'][c] == "exit"){
				count++;
				var container_div = $("<div id='item" + item['id'] +"' class='container_div'>");
				var caption = item.num + item.id;
				container_div.append("<br>" + caption + "<br>");
				var image = $("<img style='width:60%'>").attr("src", item['image_src']);
				container_div.append(image);

				if (currNum <= total){
					currNum++;
					col = $("<div>");
					col.attr("class", "col-md-4");

					$(row).append(col);
					$(col).html(container_div);

				}
			}
		}
	}

	changeCount();

}

var setActiveExit = function(type){
	console.log("Exit is set active");
	changeHeader('Exit the Frame');
	loadDataExit();
}

function loadDataFade(){

	$("#homepage").hide(); // Hides homepage.
	$("#parent").html(""); // Reset parent div.

	var container_div = $("<div>");
	$("#parent").append(container_div);

	count = 0;

	var row = $("<div>");
	row.attr('class', "row");
	$("row").html("");
	$(container_div).append(row);

	total = Object.keys(data).length;
	currNum = 1;

	for (d in data){
		var item = data[d];

		for (c in item['looping']){

			if (item['looping'][c] == "fade"){
				count++;
				var container_div = $("<div id='item" + item['id'] +"' class='container_div'>");
				var caption = item.num + item.id;
				container_div.append("<br>" + caption + "<br>");
				var image = $("<img style='width:60%'>").attr("src", item['image_src']);
				container_div.append(image);

				if (currNum <= total){
					currNum++;
					col = $("<div>");
					col.attr("class", "col-md-4");

					$(row).append(col);
					$(col).html(container_div);

				}
			}
		}
	}

	changeCount();

}

var setActiveFade = function(type){
	console.log("Fade is set active");
	changeHeader('Fade');
	loadDataFade();
}

function loadDataReturn(){

	$("#homepage").hide(); // Hides homepage.
	$("#parent").html(""); // Reset parent div.

	var container_div = $("<div>");
	$("#parent").append(container_div);

	count = 0;

	var row = $("<div>");
	row.attr('class', "row");
	$("row").html("");
	$(container_div).append(row);

	total = Object.keys(data).length;
	currNum = 1;

	for (d in data){
		var item = data[d];

		for (c in item['looping']){

			if (item['looping'][c] == "return"){
				count++;
				var container_div = $("<div id='item" + item['id'] +"' class='container_div'>");
				var caption = item.num + item.id;
				container_div.append("<br>" + caption + "<br>");
				var image = $("<img style='width:60%'>").attr("src", item['image_src']);
				container_div.append(image);

				if (currNum <= total){
					currNum++;
					col = $("<div>");
					col.attr("class", "col-md-4");

					$(row).append(col);
					$(col).html(container_div);

				}
			}
		}
	}

	changeCount();

}

var setActiveReturn = function(type){
	console.log("Return is set active");
	changeHeader('Return to Original Position');
	loadDataReturn();
}

// Uniform speed.
function loadDataUniform(){

	$("#homepage").hide(); // Hides homepage.
	$("#parent").html(""); // Reset parent div.

	var container_div = $("<div>");
	$("#parent").append(container_div);

	count = 0;

	var row = $("<div>");
	row.attr('class', "row");
	$("row").html("");
	$(container_div).append(row);

	total = Object.keys(data).length;
	currNum = 1;

	for (d in data){
		var item = data[d];

		for (c in item['speed']){

			if (item['speed'][c] == "uniform"){
				count++;
				var container_div = $("<div id='item" + item['id'] +"' class='container_div'>");
				var caption = item.num + item.id;
				container_div.append("<br>" + caption + "<br>");
				var image = $("<img style='width:60%'>").attr("src", item['image_src']);
				container_div.append(image);

				if (currNum <= total){
					currNum++;
					col = $("<div>");
					col.attr("class", "col-md-4");

					$(row).append(col);
					$(col).html(container_div);

				}
			}
		}
	}

	changeCount();

}

var setActiveUniform = function(type){
	console.log("Uniform speed is set active");
	changeHeader('Uniform Speed');
	loadDataUniform();
}

// Accelerated speed.
function loadDataAccelerated(){

	$("#homepage").hide(); // Hides homepage.
	$("#parent").html(""); // Reset parent div.

	var container_div = $("<div>");
	$("#parent").append(container_div);

	count = 0;

	var row = $("<div>");
	row.attr('class', "row");
	$("row").html("");
	$(container_div).append(row);

	total = Object.keys(data).length;
	currNum = 1;

	for (d in data){
		var item = data[d];

		for (c in item['speed']){

			if (item['speed'][c] == "accelerated"){
				count++;
				var container_div = $("<div id='item" + item['id'] +"' class='container_div'>");
				var caption = item.num + item.id;
				container_div.append("<br>" + caption + "<br>");
				var image = $("<img style='width:60%'>").attr("src", item['image_src']);
				container_div.append(image);

				if (currNum <= total){
					currNum++;
					col = $("<div>");
					col.attr("class", "col-md-4");

					$(row).append(col);
					$(col).html(container_div);

				}
			}
		}
	}

	changeCount();

}

var setActiveAccelerated = function(type){
	console.log("Accelerated speed is set active");
	changeHeader('Accelerated Speed');
	loadDataAccelerated();
}

// Paused speed.
function loadDataPaused(){

	$("#homepage").hide(); // Hides homepage.
	$("#parent").html(""); // Reset parent div.

	var container_div = $("<div>");
	$("#parent").append(container_div);

	count = 0;

	var row = $("<div>");
	row.attr('class', "row");
	$("row").html("");
	$(container_div).append(row);

	total = Object.keys(data).length;
	currNum = 1;

	for (d in data){
		var item = data[d];

		for (c in item['speed']){

			if (item['speed'][c] == "paused"){
				count++;
				var container_div = $("<div id='item" + item['id'] +"' class='container_div'>");
				var caption = item.num + item.id;
				container_div.append("<br>" + caption + "<br>");
				var image = $("<img style='width:60%'>").attr("src", item['image_src']);
				container_div.append(image);

				if (currNum <= total){
					currNum++;
					col = $("<div>");
					col.attr("class", "col-md-4");

					$(row).append(col);
					$(col).html(container_div);

				}
			}
		}
	}

	changeCount();

}

var setActivePaused = function(type){
	console.log("Paused speed is set active");
	changeHeader('Paused');
	loadDataPaused();
}

// Updates counter.
var changeCount = function(){
	$("#counter").empty();
	$("#counter").append('Number of Animations: ' + count);
}

// Changes header.
var changeHeader = function(name){
	$("#header").empty();
	$("#header").append(name);
}

// Loads homepage.
var loadHome = function(){
	$("#header").empty();
	$("#counter").empty();
	$("#parent").html("");
	$("#homepage").show();
}