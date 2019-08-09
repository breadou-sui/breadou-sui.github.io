$(document).ready(function(){
	console.log("Document is ready!");
// 	function matchHeight() {
//   		var img = document.getElementById('image'),
//       	overlay = document.getElementById('overlay');
//   		overlay.style.width = img.offsetWidth + 'px';
//   		overlay.style.height = img.offsetHeight + 'px';
// }

// window.addEventListener("load",function() {
//   matchHeight();
// });

// window.addEventListener("resize", function() {
//   matchHeight();
// });

});
// function loadAnimatedBlends(){
// 	var container_div = $("<div>");
// 	$("#portfolio").append(container_div);

// 	count = 0;

// 	var row = $("<div>");
// 	row.attr('class', "row");
// 	$(container_div).append(row);

// 	total = Object.keys(data).length // Total # of blends in database.
// 	currNum = 1;

// 	$.each(data, function(i, blend_data){
// 		var container_div = $("<div id='blend_data" + blend_data['id'] + "'class='container_div'>");
// 		let image_src = blend_data["image_src"];
// 			let new_image = $("<img style='width: 70%'>").attr("src", image_src);
			
// 			container_div.append("<br>" + blend_data.id + "<br>");
// 			container_div.append(new_image);

// 			if (currNum <= total){
// 				currNum++;
// 				col = $("<div>");
// 				col.attr("class", "col-md-4");
// 				$(row).append(col);
// 				$(col).html(container_div);
// 			}
// 	})

// }