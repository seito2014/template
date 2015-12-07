var accordion = (function () {

    'use strict';

    //グロナビ、下層ページアコーディオン共通の命令
    var ACTIVE_CLASS = 'is-active';

    function clickHandler(self){
        var $target = $('#' + self.data('target'));
        var targetHeight = $target.children().outerHeight();
        if($(self).hasClass(ACTIVE_CLASS)){
            $target.css('height', 0);
            $(self).removeClass(ACTIVE_CLASS);
        } else {
            $target.css('height', targetHeight);
            $(self).addClass(ACTIVE_CLASS);
        }
    }

    $('.js-accordion-trigger').on('click', function(){
        clickHandler($(this));
    });
})();

module.exports = accordion;