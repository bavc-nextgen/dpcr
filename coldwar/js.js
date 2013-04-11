$(document).ready(function(){
	initPopcorn();
});

var initPopcorn = function() {

	var pop = Popcorn( "#video" );

	// set time update
	pop.on( "timeupdate", function() {
		$('#currentTime').val(this.currentTime());
	});   

	pop.cue(9.06, myFunc);

	pop.cue(13.06, function() {
		console.log("yeah");
	});

	pop.footnote({
		start: 0,
		end: 20,
		target: "footnote",
		text: "<p><h3><b>New Clear Vision</b></h3><br/>Directed by Henry Zaballos, 2009<br/>A short experimental film that uses found footage to explore nostalgic images to explore images from our collective mental landscapes.</p>"
	});
};

var myFunc = function() {
	console.log("myfunc");
};