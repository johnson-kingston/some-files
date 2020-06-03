function main(){
	$('.hyphenate').hyphenate('de-1996');
	if ( self !== top ) {
		var windowHeight = window.parent.$("#mainframe_wrap").height();
		var windowWidth = window.parent.$("#mainframe_wrap").width();
	}
	else{
		var windowHeight = $(window).height();
		var windowHWidth = $(window).width();
	}

	$('.fullscreen_img').css('height',windowHeight);
	$('.fullscreen_img').css('width',windowWidth);
}

$( document ).ready(function() {
	main();
});

$( window ).resize(function() {
    main();
});