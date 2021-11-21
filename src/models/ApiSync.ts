import { AxiosPromise } from 'axios';
import axios from '../config/axios.config';

// Define that Every genric type have a Id property
interface HasId {
	id?: number;
}
// Generic class to save and fetch the data from server.
export default class ApiSync<T extends HasId> {
	// Initilize the Class and set the Uniform name locator
	// which is the sub path to the URL
	constructor(public Unl: string) {}

	// Fetches some data from the server about a particular user using id
	// and return the Response as Axios Promise
	fetch(id: number): AxiosPromise {
		return axios.get(`${this.Unl}/${id}`);
	}

	// Saves some data about this user to the server and return the Axios response
	// To check for success and failure of data persistance on server
	save(data: T): AxiosPromise {
		const { id } = data;
		if (id) {
			return axios.put(`${this.Unl}/${id}`, data);
		} else {
			return axios.post(this.Unl, data);
		}
	}
}
