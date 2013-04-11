$(document).ready(function(){
	initPopcorn();
});

var initPopcorn = function() {

	var pop = Popcorn( "#video" );

	// set time update
	pop.on( "timeupdate", function() {
		$('#currentTime').val(this.currentTime());
	});   

	pop.cue(2.06, function(){
/*
al the code was crap, re thiknking tonight after some coffee

*/
	});

	pop.footnote({
		start: 0,
		end: 20,
		target: "footnote",
		text: "<p><h3><b>New Clear Vision</b></h3><br/>Directed by Henry Zaballos, 2009<br/>A short experimental film that uses found footage to explore nostalgic images to explore images from our collective mental landscapes.</p>"
	});
};


