//modalSliderを各ページで実行するファイル
var setModalSlider = (function(){

    'use strict';

    //モダールウィンドウのスクロールバー設定
    var configPerfectScollbar = {
        minScrollbarLength: 0,
        maxScrollbarLength: 100
    };

    //service-spa.html
    if($('#js-modal-spa-matsuyama').length > 0){

        var $spaMatsuyama = $('#js-modal-spa-matsuyama'),
            $spaImabari = $('#js-modal-spa-imabari');

        //松山
        $spaMatsuyama.modalSlider({
            trigger: $('#js-modal-triggers-spa-matsuyama').find('.thumbnail')
        });
        $spaMatsuyama.find('.spa-figure').perfectScrollbar(configPerfectScollbar);

        //今治
        $spaImabari.modalSlider({
            trigger: $('#js-modal-triggers-spa-imabari').find('.thumbnail')
        });
        $spaImabari.find('.spa-figure').perfectScrollbar(configPerfectScollbar);
    }

    //service-box.html
    if($('#js-modal-box-outdoor').length > 0) {

        var $outdoor = $('#js-modal-box-outdoor'),
            $floor1 = $('#js-modal-box-floor1'),
            $floor2 = $('#js-modal-box-floor2'),
            $floor3 = $('#js-modal-box-floor3'),
            $other = $('#js-modal-box-other'),
            $other1 = $('#js-modal-box-other1');

        //屋外
        $outdoor.modalSlider({
            trigger: $('#js-modal-triggers-box-outdoor').find('.thumbnail')
        });
        $outdoor.find('.spa-figure').perfectScrollbar(configPerfectScollbar);
        //本館1F
        $floor1.modalSlider({
            trigger: $('#js-modal-triggers-box-floor1').find('.thumbnail')
        });
        $floor1.find('.spa-figure').perfectScrollbar(configPerfectScollbar);
        //本館2F
        $floor2.modalSlider({
            trigger: $('#js-modal-triggers-box-floor2').find('.thumbnail')
        });
        $floor2.find('.spa-figure').perfectScrollbar(configPerfectScollbar);
        //本館3F
        $floor3.modalSlider({
            trigger: $('#js-modal-triggers-box-floor3').find('.thumbnail')
        });
        $floor3.find('.spa-figure').perfectScrollbar(configPerfectScollbar);
        //別棟
        $other.modalSlider({
            trigger: $('#js-modal-triggers-box-other').find('.thumbnail')
        });
        $other.find('.spa-figure').perfectScrollbar(configPerfectScollbar);
        //別館1F
        $other1.modalSlider({
            trigger: $('#js-modal-triggers-box-other1').find('.thumbnail')
        });
        $other1.find('.spa-figure').perfectScrollbar(configPerfectScollbar);
    }




})();

module.exports = setModalSlider;