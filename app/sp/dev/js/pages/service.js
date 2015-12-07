(function () {

    'use strict';

    var sliderName = 'js-concept-slider';
    var $slider = $('div[id^=' + sliderName + ']');
    var $slide = $slider.find('img').eq(0);

    //slider
    function setsliderHeight(){
        $slider.css('height',$slide.height());
    }
    function setSlider() {
        $slider.slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 3000
        });
        setsliderHeight();
    }
    $slider.on('init', function(){
        $slider.addClass('is-active');
    });
    $(window).on('load',setSlider);
    $(window).on('resize',setsliderHeight);


    //facebook
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)){
            return;
        }
        js = d.createElement(s); js.id = id;
        js.src = '//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.5&appId=1483665068515849';
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    //twitter
    !function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + '://platform.twitter.com/widgets.js';
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, 'script', 'twitter-wjs');

    //service-box 駐車場モーダル
    var configPerfectScollbar = {
        minScrollbarLength: 0,
        maxScrollbarLength: 200
    };

    var DURATION = 300;
    var $header = $('#js-header');

    //service-box 駐車場モーダル
    function setServiceBox() {
        var target;
        var $modalParking = $('#js-modal-parking');

        //open
        $('#js-modal-trigger-parking').on('click', function (e) {
            e.preventDefault();
            target = $(this).data('target');
            $(target).addClass('is-active');
            $header.fadeOut(DURATION);
        });

        function closeModal(){
            $(target).removeClass('is-active');
            $header.fadeIn(DURATION);
        }

        //close
        $modalParking.find('.modal-close').on('click', function (e) {
            e.preventDefault();
            closeModal();
        });
        $modalParking.find('.modal-back').on('click', function (e) {
            e.preventDefault();
            closeModal();
        });
        //キボード操作
        $(document).keyup(function (e) {
            //escでclose
            if (e.keyCode === 27) {
                closeModal();
            }
        });

        //perfect scroll
        $modalParking.find('.board').perfectScrollbar(configPerfectScollbar);
    }
    setServiceBox();

})();