var megaMenu = (function () {

    'use strict';

    var DURATION = 250,
        ACTIVE_CLASS = 'is-active';

    var $window = $(window),
        $wrapper = $('#js-wrapper'),
        $body = $('body'),
        $menu = $('#js-menu'),
        $navi = $('#js-navi');

    var currentScrollTop;
    var windowHeight;

    //現在のスクロール値を取得
    function setCurrentLocation(){
        currentScrollTop = $window.scrollTop();
    }

    //windowサイズを取得
    function getWindowSize(){
        windowHeight = $window.height();
    }
    getWindowSize();

    //wrapperを固定or固定解除するスタイルを付与
    function styledContents(position,num){
        $wrapper.css({
            position: position,
            top: num
        });
    }

    //bodyを固定or固定解除するスタイルを付与
    function styledBody(num){
        $body.css('height', num);
    }

    //記憶していたscrollTop位置へ移動
    function moveToCurrentLocation(){
        $body.animate({
            scrollTop: currentScrollTop
        }, 0);
    }

    //ハンバーガーアイコンのスタイルを变化
    function clickHandler(){
        //メニュー表示
        if(!$menu.hasClass(ACTIVE_CLASS)) {
            setCurrentLocation();
            $menu.addClass(ACTIVE_CLASS);
            $navi.fadeIn(DURATION);
            styledContents('fixed', -currentScrollTop); //コンテンツエリアを固定
            styledBody(windowHeight); //ボディに高さを付与
        //メニュー非表示
        } else {
            $menu.removeClass(ACTIVE_CLASS);
            $navi.fadeOut(DURATION);
            styledContents('', ''); //コンテンツエリア固定を解除
            styledBody(''); //ボディに付与した高さをキャンセル
            moveToCurrentLocation();
        }
    }

    $menu.on('click', clickHandler);
    $window.on('resize', getWindowSize);

})();

module.exports = megaMenu;