var bannerSlider = (function () {

    'use strict';

    $('#js-banner-slider').slick({
        //dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        centerMode: true,
        centerPadding: '7px',
        slidesToShow: 3
    });


})();

module.exports = bannerSlider;