
/////////////////////////////
//////////HELLO THERE!!!/////
/////////////////////////////


// initializes popcorn scripts

$(document).ready(function(){
	initPopcorn();
});

// the popcorn script, pops all the fuctions.

var initPopcorn = function() {

		// telling where the video is
			var pop = Popcorn( "#video" );

		// set time update for debugging purposes
			pop.on( "timeupdate", function() {
				$('#currentTime').val(this.currentTime());
			});

		// each event appears calling a jquery fuction above

			pop.cue(1.0, svinfo);
			pop.cue(3.0, chbga);
			pop.cue(8.0, chbgb);
			pop.cue(8.5, svnvc)
			pop.cue(9.0, ncv);
			pop.cue(10.0, ncva);
			pop.cue(11.0, ncvb);
			pop.cue(13.0, hidencv);
};


////////////////////////////////////
// jquery functions for each event//
////////////////////////////////////

// show events

var svinfo = function(){
	$("#e-info").show("slow");
};

var svnvc = function(){
	$("#encv").show("slow");
};

// change of backgrounds

var chbga = function() { // rain
	$('#bg').fadeTo('slow', 0.3, function() { 
		$(this).attr('src', 'img/img1.jpeg');
	}).fadeTo('slow', 1);
};

var chbgb = function() {
	$('#bg').fadeTo('slow', 0.3, function() {
		$(this).attr('src', 'img/black.jpg');
	}).fadeTo('slow', 1);
};

// text changes
var ncv = function(){
	$("#encvtile").html("NEW");
};
var ncva = function(){
	$("#encvtile").html("NEW CLEAR");
};
var ncvb = function(){
	$("#encvtile").html("NEW CLEAR VISION");
};

var hidencv = function(){
	$("#encv").hide("slow");
};
