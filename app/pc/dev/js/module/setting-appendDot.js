var appendDotWork = (function(){

    'use strict';

    //Pick up
    var $pickupDot = $('#js-pickup-dot');
    if($pickupDot.size() > 0){
        $pickupDot.find('.card-heading').each(function(){
            $(this).appendDot();
        });
    }

    //新着
    var $newAreas = $('#js-new-areas');
    if($newAreas.size() > 0){
        $newAreas.find('.line-article-heading').each(function(){
            $(this).appendDot({
                direction: 'vertical'
            });
        });
    }

})();

module.exports = appendDotWork;