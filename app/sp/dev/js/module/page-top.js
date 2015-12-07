var pageTop = (function () {

    'use strict';

    var DURATION = 250;

    var startY,
        endY;

    var $pagetop = $('#js-page-top');

    function togglePageTop(){
        if(startY - endY <= 0){
            $pagetop.stop().fadeIn(DURATION);
        } else {
            $pagetop.stop().fadeOut(DURATION);
        }
    }

    $(document).on({
        'touchstart mousedown': function(e) {
            if(e.originalEvent.touches) {
                startY = e.originalEvent.touches[0].pageY;
            }
        },
        'touchmove mousemove': function(e) {
            if(e.originalEvent.touches) {
                endY = e.originalEvent.touches[0].pageY;
                togglePageTop();
            }
        }
    });


})();

module.exports = pageTop;