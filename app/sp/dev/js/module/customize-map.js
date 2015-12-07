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