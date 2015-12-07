var select = (function () {

    'use strict';

    var $select = $('.js-select');

    //要素がなければ実行しない
    if($select.length === 0){
        return;
    }

    var DEFAULT_TEXT = '選択してください';

    var currentText;

    $select.each(function(){
        var $this = $(this);

        currentText = $this.find('.select-inner').find('option:selected').text();
        console.log(currentText);

        //ロード時にセレクト内のテキストを表示
        $this.find('.select-text').html(currentText);

        //セレクト要素の値が変わったら、val値を見た目に反映
        $this.find('.select-inner').on('change', function () {
            var $current = $this.find('option:selected');
            currentText = ($current === '') ? DEFAULT_TEXT : $current.text();
            $this.find('.select-text').html(currentText);
        });
    });

    //プルダウンで営業案内が選択されたらアコーディオン表示
    var SALES = '営業案内',
        DURATION = 300;
    var saleVal;
    var $salesMenu = $('#js-news-target'),
        $salesTrigger = $('#js-news-trigger').children('select');

    function getSaleVal(self){
        saleVal = self.find('option:selected').text();
    }

    //営業案内ボックス内オープン
    function showSeles(self,duration){
        getSaleVal(self);
        if(saleVal === SALES) {
            $salesMenu.slideDown(duration);
        } else {
            $salesMenu.slideUp(duration);
        }
    }
    showSeles($salesTrigger,0);

    $salesTrigger.on('change',function(){
        showSeles($salesTrigger,DURATION);
    });

})();

module.exports = select;