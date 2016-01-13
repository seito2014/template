webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//サイト共通変数
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);

/***/ },
/* 1 */
/***/ function(module, exports) {

	var hack = (function(){

	    'use strict';

	    //htmlタグを変数に
	    var htmlTag =  document.documentElement;

	    //userAgentを変数に
	    var userAgent = window.navigator.userAgent.toLowerCase();

	    //OS,ブラウザを変数に
	    var osList = ['android','iphone','ipad'];
	    var browser = ['default'];
	    //PCかどうか判定フラグ
	    var pcFlag = true;
	    //スペースを定数に
	    var SPACE = ' ';

	    //OSを判定してhtmlタグにクラスをつける
	    for (var i = 0, len = osList.length; i < len; i+=1) {

	        if (userAgent.indexOf(osList[i]) !== -1) {
	            htmlTag.className += SPACE + osList[i];
	            pcFlag = false;

	            if (userAgent.indexOf(osList[0]) !== -1 && userAgent.indexOf(browser[0]) === -1) {
	                htmlTag.className += SPACE + browser[0];
	            }

	            break;
	        }
	    }

	    //iOS chrome
	    if(!!navigator.userAgent.match(/crios/i)) {
	        htmlTag.className += SPACE + 'chrome';
	    }

	    //osList('android','iphone','ipad')のどれでもなければ、PCと判定
	    if (pcFlag === true) {
	        htmlTag.className += SPACE + 'pc';
	    }

	})();

	module.exports = hack;

/***/ },
/* 2 */
/***/ function(module, exports) {

	//デバイスの縦向き、横向きを判定して横向きならbodyにis-horizonクラスを付ける
	var rotate = (function () {

	    'use strict';

	    var $window = $(window),
	        $body = $('body'),
	        $html = $('html');

	    var winWidth,
	        winHeight;

	    function getWindowData(){
	        winWidth = window.innerWidth;
	        winHeight = window.innerHeight;
	    }

	    function isHorizon() {
	        $body.addClass('is-horizon');
	    }

	    function isVertical() {
	        $body.removeClass('is-horizon');
	    }

	    function jadgeOrientation() {
	        getWindowData();

	        if(!$html.hasClass('pc')) {

	            //縦向き
	            if (winWidth > winHeight) {
	                isHorizon();
	            }
	            //横向き
	            else {
	                isVertical();
	            }
	        }
	    }
	    jadgeOrientation();

	    $window.on('load orientationchange resize',jadgeOrientation);

	})();

	module.exports = rotate;

/***/ },
/* 3 */
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

/***/ }
]);