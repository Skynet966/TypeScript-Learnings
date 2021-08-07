"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Map {
    googleMap;
    constructor(divId) {
        const mapDiv = document.getElementById(divId);
        if (mapDiv !== null) {
            this.googleMap = new google.maps.Map(mapDiv, {
                zoom: 1,
                center: { lat: 0, lng: 0 }
            });
        }
    }
    addMarker(mappable, label) {
        const marker = new google.maps.Marker({
            label,
            title: mappable.name,
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infoWindow.open(this.googleMap, marker);
        });
    }
}
exports.default = Map;
//# sourceMappingURL=Map.js.map