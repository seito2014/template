var config = require('./config');
var CustomizeMap = require('./customize-map');

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