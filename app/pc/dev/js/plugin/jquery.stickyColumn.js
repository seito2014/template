/*!
 * Sticky Side v0.0.1
 */


var stickyColumnWork = (function () {

    'use strict';

    $.fn.stickyColumn = function (option) {

        var $stickyColumn = $(this);

        var defaults = {
            siteWidth: null,//サイト全体の幅（必須オプション）
            baseColumn: ($stickyColumn.prev().size() > 0) ? $stickyColumn.prev() : $stickyColumn.next(), //追従の基準となるカラム要素
            positionX: 'left', //固定位置top or bottom
            positionY: 'bottom', //固定位置top or bottom
            positionNum: 0, //固定位置
            minorMargin: 0,//ウィンドウサイズ縮めた時に綺麗にfixしな場合は任意の値をここに設定
            device: 'pcOnly' //pc or all ユーザーのデバイスがPC以外でも発火するかどうか

        };

        var setting = $.extend(defaults, option);

        //deviceオプションが設定されていて、かつユーザーのデバイスがPC以外なら発火しない
        if (setting.device === 'pcOnly') {
            var userAgent = window.navigator.userAgent.toLowerCase();
            if (userAgent.indexOf('android') !== -1 ||
                userAgent.indexOf('iphone') !== -1 ||
                userAgent.indexOf('ipad') !== -1){
                return;
            }
        }

        var $window = $(window),
            $baseColumn = $(setting.baseColumn);

        // このjsを実行するために必要な主要な値を取得
        var winWidth = $window.width(),
            winHeight = $window.height(),

            winScrollTop = $window.scrollTop(), //現在のスクロール値
            winScrollBottom = winScrollTop + winHeight, //現在のスクロール値 + ウィンドウの高さ
            winScrollLeft = $window.scrollLeft(),

            baseHeight = $baseColumn.height(), //「追従の基準となるカラム要素」の高さ
            baseOffset = $baseColumn.offset().top, //「追従の基準となるカラム要素」のオフセットトップ値
            baseOffsetBottom = baseOffset + baseHeight, //「追従の基準となるカラム要素」のオフセットボトム値

            stickyWidth = $stickyColumn.width(), //「追従するカラム要素」の横幅
            stickyHeight = $stickyColumn.outerHeight(), //「追従するカラム要素」の高さ
            stickyOffset = $stickyColumn.offset().top, //「追従するカラム要素」のオフセットトップ値
            stickyOffsetBottom = stickyOffset + stickyHeight, //「追従するカラム要素」のオフセットボトム値
            fixLineBottom = stickyOffsetBottom,
            fixLineTop = stickyOffset; //カラムを追従 or 追従解除させる基準となる値

        var stickyTimer = false;

        //右側なら
        function rightInit() {
            if(setting.positionX === 'right') {
                $stickyColumn.wrap('<div id="sidebar-wrapper"></div>');
                $('#sidebar-wrapper').css({
                    float: 'right',
                    width: stickyWidth,
                    minHeight: '1px'
                });
            }
        }
        rightInit();

        //値を再設定
        function stickySettingChange(){
            winScrollTop = $window.scrollTop();
            winScrollBottom = winScrollTop + winHeight;
            winScrollLeft = $window.scrollLeft();
            baseHeight = $baseColumn.height();
            baseOffset = $baseColumn.offset().top;
            baseOffsetBottom = baseOffset + baseHeight;
            stickyHeight = $stickyColumn.outerHeight();
            stickyOffset = $stickyColumn.offset().top;
            stickyOffsetBottom = stickyOffset + stickyHeight;
        }

        //ウィンドウ幅が小さい時の処理
        function stickyScrollHandlerX() {

            if (setting.siteWidth > winWidth && winScrollBottom < baseOffsetBottom) {
                //追従要素が左側なら
                if(setting.positionX === 'left') {
                    $stickyColumn.css('left', -(winScrollLeft - setting.minorMargin));
                //追従要素が右側なら
                } else {
                    $stickyColumn.css('left', setting.siteWidth - stickyWidth - setting.minorMargin - winScrollLeft);
                }
            } else {
                $stickyColumn.css('left', '');
            }
        }

        //追従動作を実行
        function stickyColumnFunction() {

            //bottom固定の場合
            if(setting.positionY === 'bottom') {

                //「追従するカラム要素」のオフセットボトム値＜スクロール値　なら追従作動
                if (winScrollBottom - setting.positionNum >= fixLineBottom) {
                    $stickyColumn.css({
                        position: 'fixed',
                        bottom: setting.positionNum
                    });
                    stickyScrollHandlerX();

                    //「追従の基準となるカラム要素」のオフセットボトム値をスクロール値が超えたら、その値に合わせてボトム固定
                    if (winScrollBottom >= baseOffsetBottom) {
                        $stickyColumn.css('position', 'absolute');
                    }

                    //「追従するカラム要素」のオフセットボトム値＞スクロール値　なら追従解除
                } else {
                    $stickyColumn.css({
                        position: '',
                        bottom: ''
                    });
                }
                //top固定の場合
            } else {

                //「追従するカラム要素」のオフセット値＜スクロール値　なら追従作動
                if (winScrollTop >= fixLineTop - setting.positionNum) {
                    $stickyColumn.css({
                        position: 'fixed',
                        top: setting.positionNum
                    });
                    stickyScrollHandlerX();

                    //「追従の基準となるカラム要素」のオフセット値をスクロール値が超えたら、その値に合わせてトップ固定
                    if (winScrollBottom >= baseOffsetBottom) {
                        $stickyColumn.css('position','absolute');
                    }

                    //「追従するカラム要素」のオフセットボトム値＞スクロール値　なら追従解除
                } else {
                    $stickyColumn.css({
                        position: '',
                        top: '',
                        bottom:''
                    });
                }
            }
        }
        stickyColumnFunction();

        //リサイズ時の処理
        function stickyResizeHandler() {
            if (stickyTimer !== false) {
                clearTimeout(stickyTimer);
            }
            stickyTimer = setTimeout(function () {
                winWidth = $window.width();
                winHeight = $window.height();
                stickySettingChange();
                stickyColumnFunction();
            }, 200);
        }

        // stickyColumn発動タイミング
        if(baseHeight > stickyHeight + 300) { //追従するほどの高さがない場合、作動しない
            $window.on('scroll mousewheel', function () {
                stickySettingChange();
                stickyColumnFunction();
            });
            $window.on('resize', function () {
                stickyResizeHandler();
                stickyScrollHandlerX();
            });
        }

        //外部から関数にアクセスできるように
        $(window).on('stickySettingChange',stickySettingChange); //高さが変わった際はこれを実行
        $(window).on('stickyColumnFunction',stickyColumnFunction); //追従動作を実行
        $(window).on('stickyResizeHandler',stickyResizeHandler); //リサイズイベント

        return(this);
    };

})();

module.exports = stickyColumnWork;