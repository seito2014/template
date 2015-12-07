//下層ページのヒーローイメージ（大）にアニメーションを付ける
var config = require('./config');
var pageHero = (function () {

    'use strict';

    var pageHero = document.getElementById('js-page-hero'),
        $loading = $('#js-page-hero-loading');

    //要素がなければ発火しない
    if(!pageHero){
        return;
    }

    var bgImg = new Image();

    //data属性を取得し、各ページのヒーローイメージのパスを取得
    bgImg.src = config.BASE_URL + 'image/page-hero/' + pageHero.dataset.name + '.jpg';

    //↑で取得した画像の読み込みが完了したら、#js-page-heroの背景に設定　＆　is-activeクラス付与してアニメーションさせる
    bgImg.onload = function(){
        pageHero.style.backgroundImage = 'url(' + bgImg.src + ')';
        $loading.delay(500).fadeOut(500,function(){
            pageHero.className += ' is-active';
        });
    };

})();

module.exports = pageHero;