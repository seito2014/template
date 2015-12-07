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