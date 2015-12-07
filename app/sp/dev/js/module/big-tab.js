var bigTab = (function () {

    'use strict';


    var $bigTab = $('div[id^="js-big-tab"]');
    var bigTabLength = $bigTab.length;

    //タブ要素を持っていないページでは動作しない
    if(bigTabLength === 0){
        return;
    }

    var STATE_CLASS = 'is-active',
        DURATION = 500,
        HEADER_HEIGHT = 50;
    var $tabTrigger = $bigTab.find('.tab-trigger-link');
    var $document = $(document);
    var target;

    //クラスの付け替え
    function toggleTrigger(self) {
        $tabTrigger.removeClass(STATE_CLASS);
        $bigTab.find('.' + self.data('group')).addClass(STATE_CLASS);
    }

    //コンテントエリアの表示／非表示
    function toggleContents(self){
        $bigTab.find('.tab-content').removeClass(STATE_CLASS);
        target = self.attr('href');
        $(target).addClass(STATE_CLASS);
    }

    //トップまで移動
    function scrollInitial() {
        var toMove = $bigTab.offset().top;
        $('html, body').stop().animate({scrollTop: toMove - HEADER_HEIGHT}, DURATION);
    }

    //click event発火
    function clickHandler(self){
        toggleTrigger(self);
        toggleContents(self);
        scrollInitial();
    }

    $tabTrigger.on('click', function(e){
        e.preventDefault();
        clickHandler($(this));
    });

})();

module.exports = bigTab;