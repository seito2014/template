var heightLineWork = (function(){

    'use strict';

    //pr_cards
    var $prCards = $('#pr-cards');
    if($prCards.size() > 0){
        $prCards.find('.card-link').heightLine();
    }

    //記事種別タブ内
    function popularClickHandller() {
        var $target = $($(this).attr('href'));
        $target.find('.news.simple-b').tabHeightline();
    }
    var $popularMenus = $('#js-popular-menus');
    if($popularMenus.size() > 0) {
        $('#popular-area1').find('.news.simple-b').tabHeightline();
        $popularMenus.find('a').on('click', popularClickHandller);
    }

    //編集部おすすめ（.card 3列）
    var $reccomendCards = $('#js-reccomend-cards');
    if($reccomendCards.size() > 0) {
        $reccomendCards.find('.card-body').heightLine();
    }

    //大カテ編集部おすすめ
    var $boardTable = $('#js-board-table');
    if($boardTable.size() > 0) {
        $boardTable.find('.board-row').each(function(){
            $(this).find('.news').heightLine();
        });
    }

    //人気記事ランキング カテゴリ別   
    var $rankingCategory = $('#js-ranking-category');
    if($rankingCategory.size() > 0){
        $rankingCategory.find('.popular-article-link').heightLine();
    }

})();

module.exports = heightLineWork;