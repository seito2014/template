/*global setting */

var modalSlider = (function(){

    'use strict';

    $.fn.modalSlider = function(option) {

        var defaults = {
            trigger: '.js-ms-trigger' // or vertical
        };

        var setting = $.extend(defaults, option);

        var index = 0;
        var DURATION = 300;

        var $modal = $(this),
            $modalList = $modal.find('.modal-list'),
            $modalItem = $modal.find('.modal-item'),
            $prev = $modal.find('.modal-navigation-prev'),
            $next = $modal.find('.modal-navigation-next');

        var $header = $('#js-header'),
            $window = $(window);

        var modalItemLength = $modalItem.length,
            modalItemWidth;

        function setItemWidth(){
            //ウィンドウサイズに合わせた横幅を各スライドアイテムの横幅に指定
            modalItemWidth = $window.width();
            $modalItem.css('width', modalItemWidth);
        }
        setItemWidth();

        //カレントを設定
        function setCurrent(num){
            $modalItem.removeClass('is-current');
            $modalItem.eq(num).addClass('is-current');
        }

        //モーダルウィンドウのサイズをアイテムの枚数に合わせて調整
        function init() {
            $modalList.css('width', modalItemLength * modalItemWidth);
            setCurrent(index);
        }
        init();

        //リサイズ時には再計算
        $window.on('resize', function(){
            setItemWidth();
            init();
            closeModal();
        });

        //最前、最後にいるときは矢印をdisableにする
        function addClassNavigation() {
            if (index === 0) {
                $prev.addClass('is-disable');
            } else {
                $prev.removeClass('is-disable');
            }
            if (index === modalItemLength - 1) {
                $next.addClass('is-disable');
            } else {
                $next.removeClass('is-disable');
            }
        }

        //スライドを右or左に動かす
        function moveSlide(animation) {
            //アニメーションさせない切り替え
            if(animation === false){
                $modalList.css('left', -modalItemWidth * index);
                //スライドアニメーションで切り替え
            } else {
                $modalList.animate(
                    {
                        left: -modalItemWidth * index
                    }, DURATION
                );
            }
        }

        function backSlide(elm){
            //先頭にいるならなにもしない
            if(elm.hasClass('is-disable')){
                return;
            }
            if(0 < index) {
                index-=1;
                moveSlide();
                setCurrent(index);
            } else {
                index = 0;
            }
            addClassNavigation();
        }

        function goSlide(elm){
            //最後尾にいるならなにもしない
            if(elm.hasClass('is-disable')){
                return;
            }
            if(modalItemLength - 1 > index) {
                index+=1;
                moveSlide();
                setCurrent(index);
            } else {
                index = modalItemLength - 1;
            }
            addClassNavigation();
        }

        $prev.on('click', function(){
            backSlide($prev);
        });
        $next.on('click', function(){
            goSlide($next);
        });


        function closeModal(){
            $modal.removeClass('is-active');
            $header.fadeIn(DURATION);
        }

        $modal.find('.modal-back').on('click', closeModal);
        $modal.find('.modal-close').on('click', closeModal);

        function openHandler(self){
            $header.fadeOut(DURATION);
            index = self.data('index');
            moveSlide(false);
            setCurrent(index);
            //モーダルを表示
            $modal.addClass('is-active');
            addClassNavigation();
        }

        $(setting.trigger).on('click', function(){
            openHandler($(this));
        });

        //キボード操作
        $(document).keyup(function (e) {
            //escでclose
            if (e.keyCode === 27) {
                closeModal();
            //←でprev
            } else if (e.keyCode === 37) {
                backSlide($prev);
            //→でnext
            } else if (e.keyCode === 39) {
                goSlide($next);
            }
        });

        //スクロール無効化
        $window.on('touchmove', function(e){
            if(!$header.is(':visible')){
                e.preventDefault();
            }
        });

    };

})();

module.exports = modalSlider;