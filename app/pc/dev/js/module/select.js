var select = (function () {

    'use strict';

    var $select = $('#js-select');

    //要素がなければ実行しない
    if($select.length === 0){
        return;
    }

    var DEFAULT_TEXT = '選択してください';

    var currentText = DEFAULT_TEXT;

    var $selectInner = $select.children('.select-inner'),
        $selectText = $select.children('.select-text');

    //ロード時にセレクト内のテキストを表示
    $selectText.html(currentText);

    //セレクトの値変えられたら表示に反映
    $selectInner.on('change', function () {
        var $this = $(this),
            $current = $this.find('option:selected');
        currentText = ($current === '') ? DEFAULT_TEXT : $current.text();
        $selectText.html(currentText);
    });

})();

module.exports = select;