var tabWork = (function () {

    'use strict';

    //Side ランキング
    var $ranking = $('#js-ranking');
    if ($ranking.size() > 0) {
        $ranking.tab();
    }

    //オススメ
    var $recommend = $('#js-recommend');
    if ($recommend.size() > 0) {
        $recommend.tab({
            lazyload: true
        });
    }

    //人気記事ランキング          
    var $rankingGeneral = $('#js-ranking-general');
    if ($rankingGeneral.size() > 0) {
        $rankingGeneral.tab({
            lazyload: true
        });
    }

    //新着
    var $new = $('#js-new');
    if ($new.size() > 0) {
        $new.tab();
        //新着タブ内で文字数が多いテキストがあればappendDotを実行
        $('#js-new-menus').find('a').on('click', function () {
            var $target = $($(this).attr('href'));

            $target.find('.line-article-heading').each(function () {
                $(this).appendDot({
                    direction: 'vertical'
                });
            });
        });
    }

    //記事種別
    var $popular = $('#js-popular');
    if($popular.size() > 0) {
        $popular.tab({
            lazyload: true
        });
    }

})();

module.exports = tabWork;