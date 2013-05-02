
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

		// each event appears by calling a jquery fuction above

			pop.cue(9.0, sinfo);
			pop.cue(3.7, bga);
			pop.cue(8.0, bgb);
			pop.cue(9.1, snvc)
			pop.cue(9.5, ncv);
			pop.cue(10.6, ncva);
			pop.cue(11.7, ncvb);
			pop.cue(15.5, bgc);
			pop.cue(16.3, sea);
			pop.cue(22.3, bgd);
			pop.cue(31.0, bge);
			pop.cue(35.0, bgf);
			pop.cue(37.0, seb);
			pop.cue(39.5, bgg);
			pop.cue(42.5, sec);
			pop.cue(47.5,, sed);
			pop.cue(47.5,, bgh);
			pop.cue(47.5,, see);
			// /pop.cue(52.5, sed);
};


////////////////////////////////////
// jquery functions for each event//
////////////////////////////////////

// change of backgrounds

var bga = function() { // rain
	$('#bg').fadeTo('slow', 0.3, function() { 
		$(this).attr('src', 'img/img1.jpeg');
	}).fadeTo('slow', 1);
};

var bgb = function() { //black screen while the title shows
	$('#bg').fadeTo('slow', 0.3, function() {
		$(this).attr('src', 'img/black.jpg');
	}).fadeTo('slow', 1);
};

var bgc = function() { //black screen while the title shows
	$('#bg').fadeTo('slow', 0.3, function() {
		$(this).attr('src', 'img/img2.jpg');
	}).fadeTo('slow', 1);
};

var bgd = function() { //black screen while the title shows
	$('#bg').fadeTo('slow', 0.3, function() {
		$(this).attr('src', 'img/img3.jpg');
	}).fadeTo('slow', 1);
};

var bge = function() { //black screen while the title shows
	$('#bg').fadeTo('slow', 0.3, function() {
		$(this).attr('src', 'img/white.jpg');
	}).fadeTo('slow', 1);
};

var bgf = function() { //black screen while the title shows
	$('#bg').fadeTo('slow', 0.3, function() {
		$(this).attr('src', 'img/img7.jpg');
	}).fadeTo('slow', 1);
};

var bgg = function() { //black screen while the title shows
	$('#bg').fadeTo('slow', 0.3, function() {
		$(this).attr('src', 'img/img8.jpg');
	}).fadeTo('slow', 1);
};

var bgh = function() { //black screen while the title shows
	$('#bg').fadeTo('slow', 0.3, function() {
		$(this).attr('src', 'img/img16.jpg');
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

// show events

var sinfo = function(){
	$("#e-info").show("slow");
};

var snvc = function(){
	$("#encv").show("slow");
};

var snvc = function(){
	$("#encv").show("slow");
};

var sea = function(){
	$("#ea").show("slow");
};

var seb = function(){
	$("#eb").show("slow");
};

var sec = function(){
	$("#ec").show("slow");
};

var sed = function(){
	$("#ed").show("slow");
};

var see = function(){
	$("#ee").show("slow");
};

/*
var sef = function(){
	$("ef").show("slow");
};

var seg = function(){
	$("eg").show("slow");
};

var seh = function(){
	$("eh").show("slow");
};

var sei = function(){
	$("ei").show("slow");
};

var sej = function(){
	$("ej").show("slow");
};

var sek = function(){
	$("ek").show("slow");
};

var sel = function(){
	$("el").show("slow");
};

var sem = function(){
	$("em").show("slow");
};

var sen = function(){
	$("en").show("slow");
};

var seo = function(){
	$("eo").show("slow");
};

var sep = function(){
	$("ep").show("slow");
};

var seq = function(){
	$("eq").show("slow");
};
*/