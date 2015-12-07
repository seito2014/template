(function () {

    'use strict';

    //scrollMagic設定
    var controller = new ScrollMagic();
    var scene;

    function scrollMagicInit() {
            scene = new ScrollScene({
                triggerElement: '#js-not-found-content',
                triggerHook: 'onEnter' //onEnter, onLeave, onCenter
            })
                .reverse(false)
                .setClassToggle('#js-not-found-content', 'is-active')
                .addTo(controller);
    }
    $(window).on('load', scrollMagicInit);

})();