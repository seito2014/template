(function () {

    'use strict';

    //scrollMagic設定
    var controller = new ScrollMagic();
    var scene;

    function scrollMagicInit() {
            scene = new ScrollScene({
                triggerElement: '#js-about-content',
                triggerHook: 'onCenter' //onEnter, onLeave, onCenter
            })
                .reverse(false)
                .setClassToggle('#js-about-content', 'is-active')
                .addTo(controller);
    }
    $(window).on('load', scrollMagicInit);

})();