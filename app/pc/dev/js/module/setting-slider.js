var sliderWork = (function(){

    'use strict';

    var $window = $(window),
        $pickupSlider = $('#js-pickup-slider'),
        $counter = $pickupSlider.next('.js-slider-counter'),
        $counterChild = $counter.children('.slider-counter-child'),
        $counterMother = $counter.children('.slider-counter-mother');

    var $slide = $pickupSlider.find('.js-slide');
    var slideLength = $slide.length;

    var BUTTON_TAG1 = '<button type="button" class="slick-',
        BUTTON_TAG2 = '"><span class="arrow-button ',
        BUTTON_TAG3 = '"><i></i><i></i></span></button>';

    //Pick up
    if($pickupSlider.size() > 0) {
        $window.on('load', function () {

            $pickupSlider.slick({
                lazyLoad: 'ondemand',
                infinite: true,
                autoplay: true,
                variableWidth: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplaySpeed: 5000,
                prevArrow: BUTTON_TAG1 + 'prev' + BUTTON_TAG2 + 'left' + BUTTON_TAG3,
                nextArrow: BUTTON_TAG1 + 'next' + BUTTON_TAG2 + 'right' + BUTTON_TAG3
            });

            //スライド数カウント
            $counterMother.html(Math.ceil(slideLength / 3));
            $('#js-pickup-slider').on('afterChange', function (event, slick, direction) {
                $counterChild.html(Math.ceil((direction + 1) / 3));
                $pickupSlider.find('img.js-lazy').lazyload();
            });

            //スライダー作成完了までは見えなくしておき、完了後に視覚化する
            $pickupSlider.css('visibility', 'visible');

        });
    }

})();

module.exports = sliderWork;