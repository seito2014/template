var smoothScroll = (function () {

	'use strict';

    var HEADER_HEIGHT = 50;
	var $document = $(document);

	$('a.js-scroll').click(function(event) {
		if(!$(this).hasClass('nolink')){
			var id = $(this).attr('href'),
				target = $(id).offset().top;
			mStopOn();
			$('html, body').animate({scrollTop:target - HEADER_HEIGHT}, 500 , mStopOff);
			event.preventDefault();
			return false;
		}
	});

	function mStopOn(){
		$document.on('DOMMouseScroll', preventDefault);
	    $document.on('mousewheel', preventDefault);
	}

	function mStopOff(){
		$document.off('DOMMouseScroll', preventDefault);
	    $document.off('mousewheel', preventDefault);
	}

	function preventDefault(event){
		event.preventDefault();
	}

})();

module.exports = smoothScroll;