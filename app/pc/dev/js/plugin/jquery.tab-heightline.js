var tabHeightlinePlugin = (function(){

    'use strict';

    $.fn.tabHeightline = function(option) {

        var $this = $(this);

        var defaults = {};

        var setting = $.extend(defaults, option);

        var heights = [];
        var maxNum;

        //要素全ての高さを取得、配列に入れる
        function pushHeights() {
            for (var i = 0; i < $this.length; i++) {
                heights.push($this.eq(i).height());
            }
        }
        pushHeights();

        //配列の中から最大値を取得
        function getMaxNum(){
            maxNum = Math.max.apply(null,heights);
        }
        getMaxNum();

        //最大値を全ての要素のheightに入れる
        function adaptHeight(){
            $this.css('height',maxNum);
        }
        adaptHeight();
    };

})();

module.exports = tabHeightlinePlugin;