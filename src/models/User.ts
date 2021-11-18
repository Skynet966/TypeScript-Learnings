import { AxiosResponse } from 'axios';
import axios from '../config/axios.config';
interface UserProps {
	id?: number;
	name?: string;
	age?: number;
	[key: string]: string | number | undefined;
}

type Callback = () => void;

export default class User {
	// Class variable to Store the events data
	events: { [key: string]: Callback[] } = {};

	// Initilization of the User data object to
	// store information about a particular user(name, age).
	constructor(private data: UserProps) {}

	// Getter for the User data to gets a single
	// piece of info about this user(name, age).
	get(propName: string): number | string | undefined {
		return this.data[propName];
	}
	// Setter for the User data to changes information
	// about this user(name, age).
	set(update: UserProps): void {
		Object.assign(this.data, update);
	}
	// Event handler function is helps to registers an
	// event handler with this object, so other parts of
	// the app know when something changes.
	on(eventName: string, callback: Callback): void {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}
	// Triggers an event to tell other parts of the
	// app that something has changed.
	trigger(eventName: string): void {
		const handlers = this.events[eventName];
		if (!handlers || handlers.length === 0) {
			return;
		}
		handlers.forEach(callback => callback());
	}

	// Fetches some data from the server about a particular user.
	fetch(): void {
		axios
			.get(`users/${this.get('id')}`)
			.then((response: AxiosResponse): void => {
				this.set(response.data);
			});
	}

	// Saves some data about this user to the server.
	save(): void {
		const id = this.get('id');
		if (id) {
			axios.put(`users/${id}`, this.data);
		} else {
			axios.post('users', this.data);
		}
	}
}
