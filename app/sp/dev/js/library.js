//外部jsファイルを読み込み
window.jQuery = window.$ = require('jquery');

var ScrollMagicObject = require('ScrollMagic');
window.ScrollMagic = ScrollMagicObject.Controller;
window.ScrollScene = ScrollMagicObject.Scene;

var slickObject = require('slick');
window.slick = slickObject;