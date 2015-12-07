(function () {

    'use strict';

    //scrollMagic設定
    var controller = new ScrollMagic();
    var scene1;

    var scene = [];

    //大見出しのアニメーション
    function scrollMagicInit1() {
        scene1 = new ScrollScene({
            triggerElement: '#js-philosophy-headline',
            triggerHook: 'onEnter' //onEnter, onLeave, onCenter
        })
            .reverse(false)
            .setClassToggle('#js-philosophy-headline', 'is-active')
            .addTo(controller);
    }

    //大見出し下のテキスト群のアニメーション
    function scrollMagicInit2() {
        for (var i = 0; i < 5; i += 1) {
            scene[i] = new ScrollScene({
                triggerElement: '#js-philosophy-text' + i,
                triggerHook: 0.7 //onEnter, onLeave, onCenter
            })
                .reverse(false)
                .setClassToggle('#js-philosophy-text' + i, 'is-active')
                .addTo(controller);
        }
    }

    $(window).on('load', function(){
        scrollMagicInit1();
        scrollMagicInit2();
    });

})();