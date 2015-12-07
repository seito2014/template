(function () {

    'use strict';

    var target;
    var DURATION = 300;
    var $modal = $('.js-modal'),
        $header = $('#js-header');

    //open
    $('.js-modal-trigger').on('click',function(e){
        e.preventDefault();
        target = $(this).data('target');
        $(target).addClass('is-active');
        $header.fadeOut(DURATION);
    });

    //close
    $modal.find('.modal-close').on('click',function(e){
        e.preventDefault();
        $(target).removeClass('is-active');
        $header.fadeIn(DURATION);
    });
    $modal.find('.modal-back').on('click',function(e){
        e.preventDefault();
        $(target).removeClass('is-active');
        $header.fadeIn(DURATION);
    });

    //スクロール無効化
    $(window).on('touchmove', function(e){
        if(!$header.is(':visible')){
            e.preventDefault();
        }
    });

    //perfect scroll
    $('#js-modal-shops').find('.board').perfectScrollbar();
    $('#js-modal-2ban').find('.board').perfectScrollbar();
    $('#js-modal-3ban').find('.board').perfectScrollbar();

})();