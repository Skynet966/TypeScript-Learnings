export interface Mappable {
	name: string;
	location: {
		lat: number;
		lng: number;
	};
	markerContent(): string;
}

export default class Map {
	private googleMap!: google.maps.Map;
	constructor(divId: string) {
		const mapDiv = document.getElementById(divId);
		if (mapDiv !== null) {
			this.googleMap = new google.maps.Map(mapDiv, {
				zoom: 1,
				center: { lat: 0, lng: 0 }
			});
		}
	}
	addMarker(mappable: Mappable, label: string): void {
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
