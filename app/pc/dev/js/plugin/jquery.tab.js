var tabPlugin = (function(){

    'use strict';

    $.fn.tab = function(option) {

        var $tab = $(this);

        var defaults = {
            lazyload: false
        };

        var setting = $.extend(defaults, option);

        var name = $tab.attr('id');

        var $tabMenus = $tab.find('#' + name + '-menus'),
            $tabMenusItem = $tabMenus.children('li'),
            $tabMenusLink = $tabMenus.find('a'),
            $tabAreas = $tab.find('#' + name + '-areas'),
            $tabAreasItem = $tabAreas.children('li');

        var changeAreaTime,
            lazyTime;

        //クリック時の処理
        function tabClickHandler(e) {

            clearTimeout(changeAreaTime);

            e.preventDefault();

            var $this = $(this);

            //同じタブをクリックしても反応させない
            if ($this.parent().hasClass('is-active')) {
                return;
            }

            var target = $this.attr('href');
            var targetHeight = $(target).outerHeight();

            //カレントの付け替え
            $tabMenusItem.removeClass('is-active');
            $this.parent().addClass('is-active');

            $tabAreas.css('height', targetHeight);

            //タブエリアを切り替え
            $tabAreasItem.not(target).removeClass('is-active');
            $(target).show();
            changeAreaTime = setTimeout(function () {
                $tabAreasItem.not(target).hide();
                $(target).addClass('is-active');

                $(window).trigger('stickySettingChange');

            }, 1);

            //lazyloadオプションがtrueならスクロールイベントを発火させる
            if(setting.lazyload === true) {
                clearTimeout(lazyTime);
                lazyTime = setTimeout(function () {
                    $(window).trigger('scroll');
                }, 1);
            }
        }

        //タブエリアはpostion:absoluteになってるので、高さを設定
        $tabAreas.css('height',$tabAreasItem.eq(0).outerHeight());

        $tabMenusLink.on('click',tabClickHandler);

    };

})();

module.exports = tabPlugin;