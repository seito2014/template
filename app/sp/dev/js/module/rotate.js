//デバイスの縦向き、横向きを判定して横向きならbodyにis-horizonクラスを付ける
var rotate = (function () {

    'use strict';

    var $window = $(window),
        $body = $('body'),
        $html = $('html');

    var winWidth,
        winHeight;

    function getWindowData(){
        winWidth = window.innerWidth;
        winHeight = window.innerHeight;
    }

    function isHorizon() {
        $body.addClass('is-horizon');
    }

    function isVertical() {
        $body.removeClass('is-horizon');
    }

    function jadgeOrientation() {
        getWindowData();

        if(!$html.hasClass('pc')) {

            //縦向き
            if (winWidth > winHeight) {
                isHorizon();
            }
            //横向き
            else {
                isVertical();
            }
        }
    }
    jadgeOrientation();

    $window.on('load orientationchange resize',jadgeOrientation);

})();

module.exports = rotate;