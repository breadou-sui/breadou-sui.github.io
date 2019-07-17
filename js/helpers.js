var count = 0;

$(document).ready(function(){
	console.log("Document is ready!");
	loadHome();
});

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
		
		count++;
		var item = data[d];

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

	changeCount();



}

var setActiveLinear = function(type){
	console.log("Linear is set active");
	changeHeader('Linear');
	loadDataLinear();
}

var changeCount = function(){
	$("#counter").empty();
	$("#counter").append('Number of Animations: ' + count);
}

var changeHeader = function(name){
	$("#header").empty();
	$("#header").append(name);
}

var loadHome = function(){
	$("#header").empty();
	$("#counter").empty();
	$("#parent").html("");
	$("#homepage").show();
}