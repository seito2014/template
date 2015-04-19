var appendDotPlugin = (function(){

    'use strict';

    $.fn.appendDot = function(option) {

        var $this = $(this);

        var defaults = {
            direction: 'horizon' // or vertical
        };

        var setting = $.extend(defaults, option);

        var DOT_HTML = '<span class="dot">...</span>';

        function dotHandler() {

            var $inner = $this.find('.js-dot-inner');

            //横にはみ出ていたら実行
            if(defaults.direction === 'vertical') {
                if ($inner.width() > $this.width()) {
                    $this.append(DOT_HTML);
                }
            //縦にはみ出ていたら実行
            } else {
                if ($inner.height() > $this.height()) {
                    $this.append(DOT_HTML);
                }
            }

        }
        dotHandler();
    };

})();

module.exports = appendDotPlugin;