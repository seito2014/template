webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//サイト共通変数
	__webpack_require__(1);

	//UA判定
	__webpack_require__(2);

	//サンプルのJS。（削除してOK）
	__webpack_require__(3);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// サイト全体で使う定数
	module.exports = {
	    BASE_URL:document.getElementById('base-url').value,
	    SPEED_NORMAL:350
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	(function(){

	    'use strict';

	    //htmlタグを変数に
	    var htmlTag =  document.documentElement;

	    //userAgentを変数に
	    var userAgent = window.navigator.userAgent.toLowerCase();

	    //OS,ブラウザを変数に
	    var osList = ['android','iphone','ipad'];
	    var browser =  ['default'];
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

	    //osList('android','iphone','ipad')のどれでもなければ、PCと判定
	    if (pcFlag === true) {
	        htmlTag.className += SPACE + 'pc';
	    }

	})();


/***/ },
/* 3 */
/***/ function(module, exports) {

	var hackJs = (function () {

	    'use strict';

	})();

	module.exports = hackJs;

/***/ }
]);