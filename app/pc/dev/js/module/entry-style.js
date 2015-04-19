var entryStyle = (function(){

    'use strict';
    
    $(window).on('load', function(){
        if($('.entry-body').size() > 0){
            checkLink();
        }
    });

    function checkLink(){
        if($('.entry-body a').size() > 0){
            $('.entry-body a').each(function(){
                //target="_blank"かチェック
                if($(this).attr('target') === '_blank'){
                    $(this).addClass('is-target');
                }
                //imgがalignleftを持っているかチェック
                if($(this).children('img').hasClass('alignleft')){
                    $(this).children('img').removeClass('alignleft');
                    $(this).addClass('alignleft');
                }
                //imgがalignrightを持っているかチェック
                if($(this).children('img').hasClass('alignright')){
                    $(this).children('img').removeClass('alignright');
                    $(this).addClass('alignright');
                }
                //imgタグが入っているかチェック
                if($(this).children('img').size() > 0){
                    $(this).addClass('has-image').prepend('<div class="image-cover"></div>');
                    $(this).wrapInner('<div class="image-wrap"></div>');
                }
                //拡大するかチェック
                var rel = $(this).attr('rel');
                if(rel){
                    $(this).addClass('is-zoom');
                }
            });
        }
    }
})();

module.exports = entryStyle;
