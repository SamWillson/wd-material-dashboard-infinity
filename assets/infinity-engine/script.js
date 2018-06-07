// EVENT HANDLERS
$(document).ready(function(){
	frame_create();
});
$(window).on("resize", function(){
	frame_refresh();
});

// EVENTS
function frame_create(){
	frame_height = $(".frame").height()
	dx_height = 70;
	new_height = frame_height - dx_height;
	$(".frame").height( new_height + "px");
}
function frame_refresh(){
	frame_height = $(".frame").height()
	dx_height = 70; // Navigation Bar - 70px
	document_height = $(window).height();
	new_height = document_height - dx_height;
	$(".frame").height( new_height + "px");
}