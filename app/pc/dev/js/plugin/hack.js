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
