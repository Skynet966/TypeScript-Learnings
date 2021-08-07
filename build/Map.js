"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map = (function () {
    function Map(divId) {
        var mapDiv = document.getElementById(divId);
        if (mapDiv !== null) {
            this.googleMap = new google.maps.Map(mapDiv, {
                zoom: 1,
                center: { lat: 0, lng: 0 }
            });
        }
    }
    Map.prototype.addMarker = function (mappable, label) {
        var _this = this;
        var marker = new google.maps.Marker({
            label: label,
            title: mappable.name,
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        marker.addListener('click', function () {
            var infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infoWindow.open(_this.googleMap, marker);
        });
    };
    return Map;
}());
exports.default = Map;
//# sourceMappingURL=Map.js.map