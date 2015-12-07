(function () {

    'use strict';

    //検索フォームで 営業案内 をクリックしたらアコーディオン表示

    var $checkBoxes = $('#js-news-target');

    //「すべての事業」にチェックを入れたら他のチェックを外す, その他にチェックが入ったら「すべての事業」のチェックを外す
    var $input = $checkBoxes.find('input'),
        $inputAll = $input.eq(0);

    function changeInputAllHandler(){
        if($inputAll.is(':checked')) {
            $input.not($inputAll).prop('checked',false);
        }
    }
    function changeInputsHandler(){
        $inputAll.prop('checked',false);
    }

    $inputAll.on('change', changeInputAllHandler);
    $input.not($inputAll).on('change', changeInputsHandler);



})();