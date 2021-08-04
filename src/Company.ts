import { company, address } from 'faker';
import { Mappable } from './Map';

export default class Company implements Mappable {
	name: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.name = company.companyName();
		this.catchPhrase = company.catchPhrase();
		this.location = {
			lat: parseFloat(address.latitude()),
			lng: parseFloat(address.longitude())
		};
	}
	markerContent(): string {
		return `<div><h3>Company Name: ${this.name}</h3><h5>Catchphrase: ${this.catchPhrase}</h5></div>`;
	}
}
