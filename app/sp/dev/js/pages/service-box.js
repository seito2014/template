(function () {

    'use strict';

    //scrollMagic設定
    var controller = new ScrollMagic();
    var scene;

    function scrollMagicInit() {
        scene = new ScrollScene({
            triggerElement: '#js-kisuke-day',
            triggerHook: 0.7 //onEnter, onLeave, onCenter
        })
            .reverse(false)
            .setClassToggle('#js-kisuke-day', 'is-active')
            .addTo(controller);
    }
    $(window).on('load', scrollMagicInit);

})();