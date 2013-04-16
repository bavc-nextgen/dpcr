$(document).ready(function(){
	initPopcorn();
});

var initPopcorn = function() {

	var pop = Popcorn( "#video" );

	// set time update
	pop.on( "timeupdate", function() {
		$('#currentTime').val(this.currentTime());
	});   

	pop.cue(2.06, changeBg);
	pop.cue(4.0, changeBgTwo);
};

var changeBg = function() {
	$('#bg').fadeTo('slow', 0.3, function() {
		$(this).attr('src', 'img/img1.jpg');
	}).fadeTo('slow', 1);
};

var changeBgTwo = function() {
	$('#bg').fadeTo('slow', 0.3, function() {
		$(this).attr('src', 'img/img2.jpg');
	}).fadeTo('slow', 1);
};
