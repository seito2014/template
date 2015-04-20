webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//サイト共通変数
	__webpack_require__(1);

	//自作プラグイン
	__webpack_require__(2);

	//その他js
	__webpack_require__(3);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// サイト全体で使う定数
	module.exports = {
	    BASE_URL:document.getElementById('base_url').value,
	    SPEED_NORMAL:350
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	(function(){

	    'use strict';

	    //htmlタグを変数に
	    var htmlTag =  document.documentElement;

	    //userAgentを変数に
	    var userAgent = window.navigator.userAgent.toLowerCase(),
	        platform = window.navigator.platform.toLowerCase();

	    //OS,ブラウザを変数に
	    var uaIe = [/(msie|MSIE)/,/(T|t)rident/];

	    //クラス名を変数に
	    var browserClass =  ['ie','windows'];

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

	})();


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var hackJs = (function () {

	    'use strict';

	})();

	module.exports = hackJs;

/***/ }
]);