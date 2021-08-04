import { name, address } from 'faker';
import { Mappable } from './Map';

export default class User implements Mappable {
	name: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.name = name.firstName();
		this.location = {
			lat: parseFloat(address.latitude()),
			lng: parseFloat(address.longitude())
		};
	}
	markerContent(): string {
		return `<div><h3>User Name: ${this.name}</h3></div>`;
	}
}
