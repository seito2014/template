var lazyloadWork = (function () {

    'use strict';

    var $window = $(window),
        $contents = $('#js-contents'),
        $body = $('body'),
        $main = $contents.children('.js-main'),
        $side = (!$body.hasClass('page-static')) ? $contents.children('.js-side') : $contents.find('.js-side');

    var loadedTime;

    //lazyload
    function lazyloadRun() {
        $main.find('img.js-lazy').lazyload();
        $side.find('img.js-lazy').lazyload();
    }

    //記事ページ内のlazyload
    function articleImgLazeLoad(){
        $main.find('img.lazy').lazyload({
            data_attribute: 'lazy-src'
        });
    }

    //$window.onload時の実行関数
    function loadHandler(){
        clearTimeout(loadedTime);

        loadedTime = setTimeout(function(){
            $window.trigger('scroll');
        },1);
    }

    lazyloadRun();
    articleImgLazeLoad();
    $window.on('load',loadHandler);

}());