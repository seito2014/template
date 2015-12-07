webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//サイト共通変数
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports) {

	var hack = (function () {

	    'use strict';

	    //htmlタグを変数に
	    var htmlTag =  document.documentElement;

	    //userAgentを変数に
	    var userAgent = window.navigator.userAgent.toLowerCase(),
	        platform = window.navigator.platform.toLowerCase();

	    //OS,ブラウザを変数に
	    var uaIe = [/(msie|MSIE)/,/(T|t)rident/];

	    //クラス名を変数に
	    var browserClass =  ['ie','windows','safari','chrome','firefox','ie 10'];

	    //スペースを定数に
	    var SPACE = ' ';

	    //function
	    function addClassHack(conditions,className){
	        if(conditions) {
	            htmlTag.className += SPACE + className;
	        }
	    }

	    //ie
	    addClassHack(
	        userAgent.match(uaIe[0]) || userAgent.match(uaIe[1]),
	        browserClass[0]
	    );

	    //windows
	    addClassHack(
	        platform.indexOf('win') !== -1,
	        browserClass[1]
	    );

	    //safari
	    addClassHack(
	        userAgent.indexOf(browserClass[2]) !== -1 && userAgent.indexOf(browserClass[3]) === -1,
	        browserClass[2]
	    );

	    //firefox
	    addClassHack(
	        userAgent.indexOf(browserClass[4]) !== -1,
	        browserClass[4]
	    );

	    //ie10
	    addClassHack(
	        userAgent.indexOf(browserClass[5]) !== -1,
	        'ie10'
	    );

	})();

	module.exports = hack;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var smoothScroll = (function () {

		'use strict';

	    var HEADER_HEIGHT = 50;
		var $document = $(document);

		$('a.js-scroll').click(function(event) {
			if(!$(this).hasClass('nolink')){
				var id = $(this).attr('href'),
					target = $(id).offset().top;
				mStopOn();
				$('html, body').animate({scrollTop:target - HEADER_HEIGHT}, 500 , mStopOff);
				event.preventDefault();
				return false;
			}
		});

		function mStopOn(){
			$document.on('DOMMouseScroll', preventDefault);
		    $document.on('mousewheel', preventDefault);
		}

		function mStopOff(){
			$document.off('DOMMouseScroll', preventDefault);
		    $document.off('mousewheel', preventDefault);
		}

		function preventDefault(event){
			event.preventDefault();
		}

	})();
	module.exports = smoothScroll;

/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ }
]);