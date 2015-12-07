webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//サイト共通変数
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);

/***/ },
/* 1 */
/***/ function(module, exports) {

	var hack = (function(){

	    'use strict';

	    //htmlタグを変数に
	    var htmlTag =  document.documentElement;

	    //userAgentを変数に
	    var userAgent = window.navigator.userAgent.toLowerCase();

	    //OS,ブラウザを変数に
	    var osList = ['android','iphone','ipad'];
	    var browser = ['default'];
	    //PCかどうか判定フラグ
	    var pcFlag = true;
	    //スペースを定数に
	    var SPACE = ' ';

	    //OSを判定してhtmlタグにクラスをつける
	    for (var i = 0, len = osList.length; i < len; i+=1) {

	        if (userAgent.indexOf(osList[i]) !== -1) {
	            htmlTag.className += SPACE + osList[i];
	            pcFlag = false;

	            if (userAgent.indexOf(osList[0]) !== -1 && userAgent.indexOf(browser[0]) === -1) {
	                htmlTag.className += SPACE + browser[0];
	            }

	            break;
	        }
	    }

	    //iOS chrome
	    if(!!navigator.userAgent.match(/crios/i)) {
	        htmlTag.className += SPACE + 'chrome';
	    }

	    //osList('android','iphone','ipad')のどれでもなければ、PCと判定
	    if (pcFlag === true) {
	        htmlTag.className += SPACE + 'pc';
	    }

	})();

	module.exports = hack;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var bannerSlider = (function () {

	    'use strict';

	    $('#js-banner-slider').slick({
	        //dots: false,
	        infinite: true,
	        speed: 500,
	        cssEase: 'linear',
	        autoplay: true,
	        autoplaySpeed: 1500,
	        arrows: false,
	        centerMode: true,
	        centerPadding: '7px',
	        slidesToShow: 3
	    });


	})();

	module.exports = bannerSlider;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var smoothScroll = (function () {

		'use strict';

	    var HEADER_HEIGHT = 50;
		var $document = $(document);

		$('a.js-scroll').click(function(event) {
			if(!$(this).hasClass('nolink')){
				var id = $(this).attr('href'),
					target = $(id).offset().top;
				mStopOn();
				$('html, body').animate({scrollTop:target - HEADER_HEIGHT}, 500 , mStopOff);
				event.preventDefault();
				return false;
			}
		});

		function mStopOn(){
			$document.on('DOMMouseScroll', preventDefault);
		    $document.on('mousewheel', preventDefault);
		}

		function mStopOff(){
			$document.off('DOMMouseScroll', preventDefault);
		    $document.off('mousewheel', preventDefault);
		}

		function preventDefault(event){
			event.preventDefault();
		}

	})();
	module.exports = smoothScroll;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var megaMenu = (function () {

	    'use strict';

	    var DURATION = 250,
	        ACTIVE_CLASS = 'is-active';

	    var $window = $(window),
	        $wrapper = $('#js-wrapper'),
	        $body = $('body'),
	        $menu = $('#js-menu'),
	        $navi = $('#js-navi');

	    var currentScrollTop;
	    var windowHeight;

	    //現在のスクロール値を取得
	    function setCurrentLocation(){
	        currentScrollTop = $window.scrollTop();
	    }

	    //windowサイズを取得
	    function getWindowSize(){
	        windowHeight = $window.height();
	    }
	    getWindowSize();

	    //wrapperを固定or固定解除するスタイルを付与
	    function styledContents(position,num){
	        $wrapper.css({
	            position: position,
	            top: num
	        });
	    }

	    //bodyを固定or固定解除するスタイルを付与
	    function styledBody(num){
	        $body.css('height', num);
	    }

	    //記憶していたscrollTop位置へ移動
	    function moveToCurrentLocation(){
	        $body.animate({
	            scrollTop: currentScrollTop
	        }, 0);
	    }

	    //ハンバーガーアイコンのスタイルを变化
	    function clickHandler(){
	        //メニュー表示
	        if(!$menu.hasClass(ACTIVE_CLASS)) {
	            setCurrentLocation();
	            $menu.addClass(ACTIVE_CLASS);
	            $navi.fadeIn(DURATION);
	            styledContents('fixed', -currentScrollTop); //コンテンツエリアを固定
	            styledBody(windowHeight); //ボディに高さを付与
	        //メニュー非表示
	        } else {
	            $menu.removeClass(ACTIVE_CLASS);
	            $navi.fadeOut(DURATION);
	            styledContents('', ''); //コンテンツエリア固定を解除
	            styledBody(''); //ボディに付与した高さをキャンセル
	            moveToCurrentLocation();
	        }
	    }

	    $menu.on('click', clickHandler);
	    $window.on('resize', getWindowSize);

	})();

	module.exports = megaMenu;

/***/ },
/* 5 */
/***/ function(module, exports) {

	var pageTop = (function () {

	    'use strict';

	    var DURATION = 250;

	    var startY,
	        endY;

	    var $pagetop = $('#js-page-top');

	    function togglePageTop(){
	        if(startY - endY <= 0){
	            $pagetop.stop().fadeIn(DURATION);
	        } else {
	            $pagetop.stop().fadeOut(DURATION);
	        }
	    }

	    $(document).on({
	        'touchstart mousedown': function(e) {
	            if(e.originalEvent.touches) {
	                startY = e.originalEvent.touches[0].pageY;
	            }
	        },
	        'touchmove mousemove': function(e) {
	            if(e.originalEvent.touches) {
	                endY = e.originalEvent.touches[0].pageY;
	                togglePageTop();
	            }
	        }
	    });


	})();

	module.exports = pageTop;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	//下層ページのヒーローイメージ（大）にアニメーションを付ける
	var config = __webpack_require__(7);
	var pageHero = (function () {

	    'use strict';

	    var pageHero = document.getElementById('js-page-hero'),
	        $loading = $('#js-page-hero-loading');

	    //要素がなければ発火しない
	    if(!pageHero){
	        return;
	    }

	    var bgImg = new Image();

	    //data属性を取得し、各ページのヒーローイメージのパスを取得
	    bgImg.src = config.BASE_URL + 'image/page-hero/' + pageHero.dataset.name + '.jpg';

	    //↑で取得した画像の読み込みが完了したら、#js-page-heroの背景に設定　＆　is-activeクラス付与してアニメーションさせる
	    bgImg.onload = function(){
	        pageHero.style.backgroundImage = 'url(' + bgImg.src + ')';
	        $loading.delay(500).fadeOut(500,function(){
	            pageHero.className += ' is-active';
	        });
	    };

	})();

	module.exports = pageHero;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// サイト全体で使う定数
	module.exports = {
	    BASE_URL: document.getElementById('js-base-url').value,
	    SPEED_NORMAL: 350
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	var select = (function () {

	    'use strict';

	    var $select = $('.js-select');

	    //要素がなければ実行しない
	    if($select.length === 0){
	        return;
	    }

	    var DEFAULT_TEXT = '選択してください';

	    var currentText;

	    $select.each(function(){
	        var $this = $(this);

	        currentText = $this.find('.select-inner').find('option:selected').text();
	        console.log(currentText);

	        //ロード時にセレクト内のテキストを表示
	        $this.find('.select-text').html(currentText);

	        //セレクト要素の値が変わったら、val値を見た目に反映
	        $this.find('.select-inner').on('change', function () {
	            var $current = $this.find('option:selected');
	            currentText = ($current === '') ? DEFAULT_TEXT : $current.text();
	            $this.find('.select-text').html(currentText);
	        });
	    });

	    //プルダウンで営業案内が選択されたらアコーディオン表示
	    var SALES = '営業案内',
	        DURATION = 300;
	    var saleVal;
	    var $salesMenu = $('#js-news-target'),
	        $salesTrigger = $('#js-news-trigger').children('select');

	    function getSaleVal(self){
	        saleVal = self.find('option:selected').text();
	    }

	    //営業案内ボックス内オープン
	    function showSeles(self,duration){
	        getSaleVal(self);
	        if(saleVal === SALES) {
	            $salesMenu.slideDown(duration);
	        } else {
	            $salesMenu.slideUp(duration);
	        }
	    }
	    showSeles($salesTrigger,0);

	    $salesTrigger.on('change',function(){
	        showSeles($salesTrigger,DURATION);
	    });

	})();

	module.exports = select;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(7);
	var CustomizeMap = __webpack_require__(10);

	var setMaps = (function () {

	    'use strict';

	    var customizeMap = [];

	    //店舗数の分だけCustomizeMapを実行
	    var mapLength = $('div[id^="js-map"]').length;

	    //googlemap要素を持っていないページでは動作しない
	    if(mapLength === 0){
	        return;
	    }

	    //店舗の地図データ
	    var mapData = {
	        hue: '#77ff00',
	        lightness: 4,
	        saturation: -100,
	        gamma: 0.8,
	        zoom: 17,
	        streetViewControl: false, //ストリートビューのペグマン コントロール
	        scaleControl: true,
	        scrollwheel: false,
	        panControl: true,
	        disableDoubleClickZoom: true
	    };

	    for(var i = 0; i < mapLength; i+=1) {

	        var $this = $('div[id^="js-map"]').eq(i);

	        customizeMap[i] = new CustomizeMap({
	            element: $this.attr('id'),
	            hue: mapData.hue,
	            lightness: mapData.lightness,
	            saturation: mapData.saturation,
	            gamma: mapData.gamma,
	            weight: 0.1,
	            zoom: mapData.zoom,
	            point: [
	                {
	                    latLng: [$this.data('lat'), $this.data('lng')],
	                    markerImgUrl: config.BASE_URL + 'image/common/map-pin/pin-' + $this.data('pin') + '.png',
	                    markerImgSize: [18, 30]
	                }
	            ]
	        });
	        customizeMap[i].play();
	    }

	})();

	module.exports = setMaps;

/***/ },
/* 10 */
/***/ function(module, exports) {

	/*global google, map */

	'use strict';

	var CustomizeMap = function(params){
	    this.visibility = 'on';
	    this.MY_MAPTYPE_ID = 'custom_style';

	    //デザイン、コントローラーの設定
	    this.element = params.element ? params.element : 'js-google-map';
	    this.hue = params.hue;
	    this.lightness = params.lightness ? params.lightness : 1;
	    this.saturation = params.saturation ? params.saturation : 10;
	    this.gamma = params.gamma ? params.gamma : 1;
	    this.weight = params.weight ? params.weight : 0.5;
	    this.zoom = params.zoom ? params.zoom : 10; //初期状態のときのズーム度合い
	    this.mapTypeControl = params.mapTypeControl ? params.mapTypeControl : false; //マップタイプ コントロール
	    this.streetViewControl = params.streetViewControl ? params.streetViewControl : false; //ストリートビューのペグマン コントロール
	    this.scaleControl = params.scaleControl ? params.scaleControl : true;
	    this.scrollwheel = params.scrollwheel ? params.scrollwheel : false;
	    this.panControl = params.panControl ? params.panControl : true;
	    this.disableDoubleClickZoom = params.disableDoubleClickZoom ? params.disableDoubleClickZoom : true;

	    //座標とマーカーのデータ
	    this.point = params.point;
	    this.pointLength = params.point.length;

	    this.latLng = []; //座標
	    this.center = null; //中心点

	    this.map = null;
	    this.featureOpts = null;
	    this.mapOptions = null;
	    this.marker = [];

	    var self = this;
	    this._drawHandler = function() {
	        self.drawMap();
	    };
	    this.getLatLng();

	    return this;
	};

	//発火
	CustomizeMap.prototype.play = function(){
	    google.maps.event.addDomListener(window, 'load', this._drawHandler);
	};

	//resize
	CustomizeMap.prototype.reInit = function(){
	    google.maps.event.trigger(map, 'resize');
	    map.setCenter(this.center);
	};

	//設定とか一気に呼ぶ
	CustomizeMap.prototype.drawMap = function() {

	    this.getCenter();

	    this.setMapOptions();
	    this.getElement();

	    this.setFeatureOpts();
	    this.setType();
	    this.setMarker();

	    return this;
	};

	//座標を取得
	CustomizeMap.prototype.getLatLng = function() {
	    for (var i = 0; i < this.pointLength; i += 1) {
	        this.latLng[i] = new google.maps.LatLng(this.point[i].latLng[0], this.point[i].latLng[1]);
	    }
	};

	//マップの中心点を取得。座標が複数ある場合はそれらの中心点を割り出す
	CustomizeMap.prototype.getCenter = function() {
	    var totalLat = 0,
	        totalLng = 0;

	    for (var i = 0; i < this.pointLength; i += 1) {
	        totalLat += this.point[i].latLng[0];
	        totalLng += this.point[i].latLng[1];
	    }

	    var centerLat = (totalLat / this.pointLength),
	        centerLng = (totalLng / this.pointLength);

	    this.center = new google.maps.LatLng(centerLat, centerLng);
	};

	//色など、デザイン部分を指定
	CustomizeMap.prototype.setFeatureOpts = function(){
	    this.featureOpts = [
	        {
	            stylers: [
	                {hue: this.hue },
	                {visibility: this.visibility },
	                {gamma: this.gamma },
	                {lightness: this.lightness },
	                {saturation: this.saturation },
	                {weight: this.weight }
	            ]
	        }
	    ];
	};

	//コントローラーの有無や初期ズームの値などを指定
	CustomizeMap.prototype.setMapOptions = function() {
	    this.mapOptions = {
	        mapTypeControl: this.mapTypeControl,
	        scaleControl: this.scaleControl,
	        scrollwheel: this.scrollwheel,
	        panControl: this.panControl,
	        disableDoubleClickZoom: this.disableDoubleClickZoom,
	        streetViewControl: this.streetViewControl,
	        zoom: this.zoom,
	        center: this.center,
	        mapTypeControlOptions: {
	            mapTypeIds: [google.maps.MapTypeId.ROADMAP, this.MY_MAPTYPE_ID]
	        },
	        mapTypeId: this.MY_MAPTYPE_ID
	    };
	};

	//描画の対象となるDOMを取得し、Google mapを適応
	CustomizeMap.prototype.getElement = function(){
	    this.map = new google.maps.Map(document.getElementById(this.element),this.mapOptions);
	};

	//マーカーアイコンの指定
	CustomizeMap.prototype.setMarker = function() {
	    for (var i = 0; i < this.pointLength; i += 1) {
	        this.marker[i] = new google.maps.Marker({
	            position: this.latLng[i],
	            map: this.map,
	            icon: {
	                url: this.point[i].markerImgUrl,
	                size: new google.maps.Size(this.point[i].markerImgSize[0], this.point[i].markerImgSize[1])
	            }
	        });
	    }
	};

	CustomizeMap.prototype.setType = function(){
	    var styledMapOptions = {
	        name: 'Custom Style'
	    };

	    var customMapType = new google.maps.StyledMapType(this.featureOpts, styledMapOptions);

	    this.map.mapTypes.set(this.MY_MAPTYPE_ID, customMapType);
	};

	module.exports = CustomizeMap;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(7);
	var CustomizeMap = __webpack_require__(10);

	var setMaps = (function () {

	    'use strict';

	    var customizeMap = [];

	    //店舗数の分だけCustomizeMapを実行
	    var mapLength = $('div[id^="js-multple-map"]').length;

	    //googlemap要素を持っていないページでは動作しない
	    if(mapLength === 0){
	        return;
	    }

	    //店舗の地図データ
	    var mapData = {
	        hue: '#77ff00',
	        lightness: 4,
	        saturation: -100,
	        gamma: 0.8,
	        zoom: 16,
	        streetViewControl: false, //ストリートビューのペグマン コントロール
	        scaleControl: true,
	        scrollwheel: false,
	        panControl: true,
	        disableDoubleClickZoom: true
	    };

	    for(var i = 0; i < mapLength; i+=1) {

	        var $this = $('div[id^="js-multple-map"]').eq(i);

	        customizeMap[i] = new CustomizeMap({
	            element: $this.attr('id'),
	            hue: mapData.hue,
	            lightness: mapData.lightness,
	            saturation: mapData.saturation,
	            gamma: mapData.gamma,
	            weight: 0.1,
	            zoom: mapData.zoom,
	            point: [
	                {
	                    latLng: [$this.data('lat'), $this.data('lng')],
	                    markerImgUrl: config.BASE_URL + 'image/common/map-pin/pin-' + $this.data('pin') + '.png',
	                    markerImgSize: [18, 30]
	                },
	                {
	                    latLng: [$this.data('lat2'), $this.data('lng2')],
	                    markerImgUrl: config.BASE_URL + 'image/common/map-pin/pin-' + $this.data('pin') + '.png',
	                    markerImgSize: [18, 30]
	                }
	            ]
	        });
	        customizeMap[i].play();
	    }

	})();

	module.exports = setMaps;

/***/ },
/* 12 */
/***/ function(module, exports) {

	var bigTab = (function () {

	    'use strict';


	    var $bigTab = $('div[id^="js-big-tab"]');
	    var bigTabLength = $bigTab.length;

	    //タブ要素を持っていないページでは動作しない
	    if(bigTabLength === 0){
	        return;
	    }

	    var STATE_CLASS = 'is-active',
	        DURATION = 500,
	        HEADER_HEIGHT = 50;
	    var $tabTrigger = $bigTab.find('.tab-trigger-link');
	    var $document = $(document);
	    var target;

	    //クラスの付け替え
	    function toggleTrigger(self) {
	        $tabTrigger.removeClass(STATE_CLASS);
	        $bigTab.find('.' + self.data('group')).addClass(STATE_CLASS);
	    }

	    //コンテントエリアの表示／非表示
	    function toggleContents(self){
	        $bigTab.find('.tab-content').removeClass(STATE_CLASS);
	        target = self.attr('href');
	        $(target).addClass(STATE_CLASS);
	    }

	    //トップまで移動
	    function scrollInitial() {
	        var toMove = $bigTab.offset().top;
	        $('html, body').stop().animate({scrollTop: toMove - HEADER_HEIGHT}, DURATION);
	    }

	    //click event発火
	    function clickHandler(self){
	        toggleTrigger(self);
	        toggleContents(self);
	        scrollInitial();
	    }

	    $tabTrigger.on('click', function(e){
	        e.preventDefault();
	        clickHandler($(this));
	    });

	})();

	module.exports = bigTab;

/***/ },
/* 13 */
/***/ function(module, exports) {

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

/***/ },
/* 14 */
/***/ function(module, exports) {

	//modalSliderを各ページで実行するファイル
	var setModalSlider = (function(){

	    'use strict';

	    //モダールウィンドウのスクロールバー設定
	    var configPerfectScollbar = {
	        minScrollbarLength: 0,
	        maxScrollbarLength: 100
	    };

	    //service-spa.html
	    if($('#js-modal-spa-matsuyama').length > 0){

	        var $spaMatsuyama = $('#js-modal-spa-matsuyama'),
	            $spaImabari = $('#js-modal-spa-imabari');

	        //松山
	        $spaMatsuyama.modalSlider({
	            trigger: $('#js-modal-triggers-spa-matsuyama').find('.thumbnail')
	        });
	        $spaMatsuyama.find('.spa-figure').perfectScrollbar(configPerfectScollbar);

	        //今治
	        $spaImabari.modalSlider({
	            trigger: $('#js-modal-triggers-spa-imabari').find('.thumbnail')
	        });
	        $spaImabari.find('.spa-figure').perfectScrollbar(configPerfectScollbar);
	    }

	    //service-box.html
	    if($('#js-modal-box-outdoor').length > 0) {

	        var $outdoor = $('#js-modal-box-outdoor'),
	            $floor1 = $('#js-modal-box-floor1'),
	            $floor2 = $('#js-modal-box-floor2'),
	            $floor3 = $('#js-modal-box-floor3'),
	            $other = $('#js-modal-box-other'),
	            $other1 = $('#js-modal-box-other1');

	        //屋外
	        $outdoor.modalSlider({
	            trigger: $('#js-modal-triggers-box-outdoor').find('.thumbnail')
	        });
	        $outdoor.find('.spa-figure').perfectScrollbar(configPerfectScollbar);
	        //本館1F
	        $floor1.modalSlider({
	            trigger: $('#js-modal-triggers-box-floor1').find('.thumbnail')
	        });
	        $floor1.find('.spa-figure').perfectScrollbar(configPerfectScollbar);
	        //本館2F
	        $floor2.modalSlider({
	            trigger: $('#js-modal-triggers-box-floor2').find('.thumbnail')
	        });
	        $floor2.find('.spa-figure').perfectScrollbar(configPerfectScollbar);
	        //本館3F
	        $floor3.modalSlider({
	            trigger: $('#js-modal-triggers-box-floor3').find('.thumbnail')
	        });
	        $floor3.find('.spa-figure').perfectScrollbar(configPerfectScollbar);
	        //別棟
	        $other.modalSlider({
	            trigger: $('#js-modal-triggers-box-other').find('.thumbnail')
	        });
	        $other.find('.spa-figure').perfectScrollbar(configPerfectScollbar);
	        //別館1F
	        $other1.modalSlider({
	            trigger: $('#js-modal-triggers-box-other1').find('.thumbnail')
	        });
	        $other1.find('.spa-figure').perfectScrollbar(configPerfectScollbar);
	    }




	})();

	module.exports = setModalSlider;

/***/ },
/* 15 */
/***/ function(module, exports) {

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

/***/ },
/* 16 */
/***/ function(module, exports) {

	//デバイスの縦向き、横向きを判定して横向きならbodyにis-horizonクラスを付ける
	var rotate = (function () {

	    'use strict';

	    var $window = $(window),
	        $body = $('body'),
	        $html = $('html');

	    var winWidth,
	        winHeight;

	    function getWindowData(){
	        winWidth = window.innerWidth;
	        winHeight = window.innerHeight;
	    }

	    function isHorizon() {
	        $body.addClass('is-horizon');
	    }

	    function isVertical() {
	        $body.removeClass('is-horizon');
	    }

	    function jadgeOrientation() {
	        getWindowData();

	        if(!$html.hasClass('pc')) {

	            //縦向き
	            if (winWidth > winHeight) {
	                isHorizon();
	            }
	            //横向き
	            else {
	                isVertical();
	            }
	        }
	    }
	    jadgeOrientation();

	    $window.on('load orientationchange resize',jadgeOrientation);

	})();

	module.exports = rotate;

/***/ }
]);