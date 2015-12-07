(function () {

    'use strict';

    //scrollMagic設定
    var controller = new ScrollMagic();
    var scene = [];

    function scrollMagicInit() {
        for (var i = 0; i < 9; i += 1) {
            scene[i] = new ScrollScene({
                triggerElement: '#js-resource' + i,
                triggerHook: 0.7 //onEnter, onLeave, onCenter
            })
                .reverse(false)
                .setClassToggle('#js-resource' + i, 'is-active')
                .addTo(controller);
        }
    }
    $(window).on('load', scrollMagicInit);
})();