var headerSearchWork = (function(){

    'use strict';

    var $headerSearch = $('#js-header-search'),
        $headerSub = $('#header-sub'),
        $inpit = $headerSearch.find('input');

    function submitHandler(e){
        if(!$headerSub.hasClass('is-active')){
            e.preventDefault();

            $headerSub.addClass('is-active');
            $inpit.focus();
        }
    }

    $headerSearch.on('submit',function(e) {
        submitHandler(e);
    });

    $(document).on('click',function(e) {
        if (!$.contains($headerSearch[0], e.target)) {
            $headerSub.removeClass('is-active');
        }
    });

})();

module.exports = headerSearchWork;
