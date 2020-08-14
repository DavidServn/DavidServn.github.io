(function($) {

	skel.breakpoints({
		xlarge:		'(max-width: 1680px)',
		large:		'(max-width: 1280px)',
		medium:		'(max-width: 980px)',
		small:		'(max-width: 736px)',
		xsmall:		'(max-width: 480px)',
		xxsmall:	'(max-width: 360px)'
	});

	$(function() {
		$('body').addClass('loaded');

        var	$avatar = $('.avatar')

        $("a").hover(
            function() {
                $avatar.css( "background-image", "url('assets/images/photo-pixel-glitch.gif')" );
            }, function() {
                $avatar.css( "background-image", "url('assets/images/photo-pixel.gif')" );
            }
          );
	});

})(jQuery);