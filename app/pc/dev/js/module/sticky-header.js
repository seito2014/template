var megaMenu = (function () {

    'use strict';

    var $window = $(window),
        $body = $('body'),
        $header = $('#js-header'),

        $headerClone = $header.contents().clone(),

        $headerCloneContainer = $('<div class="sticky-header" id="js-sticky-header"></div>'),

        changeLine = $header.offset().top + $header.outerHeight();

        $headerCloneContainer.append($headerClone);

        $headerCloneContainer.appendTo('body');

        //Adsenseページなら、.adsense-wrapperでsticky-headerを囲う
        function AdPageInit() {
            if($body.hasClass('page-adsense') || $body.hasClass('page-static')){
                setTimeout(function(){
                    $('#js-sticky-header').wrap('<div class="adsense-wrapper"></div>');
                },1);
            }
        }

        function init() {
            $('#js-sticky-header').find('.nav-item').removeClass('is-current');
            AdPageInit();
        }

        function scrollHandler(){
            if ($window.scrollTop() > changeLine) {
                $headerCloneContainer.addClass('is-visible');
            } else {
                $headerCloneContainer.removeClass('is-visible');
            }
        }

        init();
        $window.on('scroll',scrollHandler);
        $window.trigger('scroll');

}());

module.exports = megaMenu;