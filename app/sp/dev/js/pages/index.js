/*global ScrollMagic, ScrollScene */
(function () {

    'use strict';

    var $window = $(window);
    var controller = new ScrollMagic();
    var scene;
    var NEWS_HEIGHT = 56;

    //scrollMagic設定
    function scrollMagicInit() {
        // create a scene
        scene = new ScrollScene({
            triggerElement: '#js-header-change-line',
            triggerHook: 'onLeave' //onEnter, onLeave, onCenter
        })
            .setClassToggle('#js-header', 'is-scrolling')
            .addTo(controller);
    }

    //メインビジュアルをウィンドウサイズにあわせる(ただしNEWS一行分をふくむ)
    var $hero = $('#js-hero');
    function resizeHero(){
        $hero.css({
            width: $window.width(),
            height: $window.height() - NEWS_HEIGHT
        });
    }
    resizeHero();
    $window.on('resize', resizeHero);

    //メインビジュアルの一定間隔でスライドショーさせる
    var $heroImage = $('#js-hero-image'),
        $heroImageItem = $heroImage.find('.hero-image-object');

    var heroImageItemLength = $heroImageItem.length;

    var index = 0,
        last,
        firstTime = true;
    var INTERVAL = 5000,
        DURATION = 1000;
    var timer;

    //前のスライドを特定
    function getLastSlide(){
        if(index === 0){
            last = heroImageItemLength - 1;
        } else {
            last = index - 1;
        }
    }

    function loop() {
        clearTimeout(timer);

        getLastSlide();

        if(firstTime !== true) {
            //非表示
            $heroImageItem.eq(last).stop().fadeOut(DURATION,function(){
                $heroImageItem.eq(last).removeClass('is-active');
            });
            //表示
            $heroImageItem.eq(index).stop().fadeIn(DURATION);
            $heroImageItem.eq(index).addClass('is-active');
        }
        if (index < heroImageItemLength - 1) {
            index+=1;
        } else {
            index = 0;
        }
        firstTime = false;
        timer = setTimeout(loop, INTERVAL);
    }
    loop();

    //heroイメージを表示
    function startHero(){
        $hero.addClass('is-active');
    }

    //loadingを非表示
    function hideLoading(){
        var $loading = $('#js-loading');
        $loading.addClass('is-hidden');
        $loading.on('webkitTransitionEnd transitionend',function(){
            $loading.hide();
        });
    }

    function loadHandler(){
        hideLoading();
        startHero();
        setTimeout(function(){
            scrollMagicInit();
        },1000);
    }

    //load
    $window.on('load', loadHandler);

    //スクロールに合わせてセクジョン内の要素をアニメーションさせる

    //scrollMagic設定
    var scene1 = new ScrollScene({
        triggerElement: '#js-section-service',
        triggerHook: 'onCenter' //onEnter, onLeave, onCenter
    })
        .reverse(false)
        .setClassToggle('#js-section-service', 'is-active')
        .addTo(controller);

    var scene2 = new ScrollScene({
        triggerElement: '#js-section-recruit',
        triggerHook: 'onCenter' //onEnter, onLeave, onCenter
    })
        .reverse(false)
        .setClassToggle('#js-section-recruit', 'is-active')
        .addTo(controller);

    var scene3 = new ScrollScene({
        triggerElement: '#js-section-contact',
        triggerHook: 'onCenter' //onEnter, onLeave, onCenter
    })
        .reverse(false)
        .setClassToggle('#js-section-contact', 'is-active')
        .addTo(controller);

})();