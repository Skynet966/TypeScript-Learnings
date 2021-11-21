import { AxiosResponse } from 'axios';
import axios from '../config/axios.config';
import Eventing from './Eventing';

export default class Collection<T, M> {
	models: T[] = [];
	events: Eventing = new Eventing();

	constructor(public unl: string, public deserialize: (json: M) => T) {}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	fetch(): void {
		axios.get(this.unl).then((response: AxiosResponse): void => {
			response.data.forEach((value: M) => {
				this.models.push(this.deserialize(value));
			});
		});
		this.trigger('change');
	}
}
