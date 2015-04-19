var stickyWork = (function(){

    'use strict';

    var $window = $(window),
        $sticky = $('#js-sticky'),
        $pickupSlider = $('#js-pickup-slider');

    function stickyMainRun() {
        $sticky.stickyColumn({
            siteWidth: 1030,
            baseColumn: '#js-base',
            positionX: 'left',
            positionY: 'bottom',
            positionNum: 0,
            minorMargin: 25
        });
    }

    function stickySideRun() {
        $sticky.stickyColumn({
            siteWidth: 1030,
            baseColumn: '#js-base',
            positionX: 'right',
            positionY: 'bottom',
            positionNum: 0,
            minorMargin: 25
        });
    }

    //メインカラム追従時の設定
    if($sticky.hasClass('main')) {

        //pickupスライダーがあれば、スライダー実行が完了して高さが決まった後に作動
        if ($sticky.size() > 0 && $pickupSlider.size() > 0) {
            $pickupSlider.on('init', stickyMainRun);
            //追従カラムがあれば作動
        } else if ($sticky.size() > 0) {
            $window.on('load', stickyMainRun);
        }

    //サイドバー追従時の設定
    } else {
        //pickupスライダーがあれば、スライダー実行が完了して高さが決まった後に作動
        if ($sticky.size() > 0 && $pickupSlider.size() > 0) {
            $pickupSlider.on('init', stickySideRun);
            //追従カラムがあれば作動
        } else if ($sticky.size() > 0) {
            $window.on('load', stickySideRun);
        }
    }

})();

module.exports = stickyWork;