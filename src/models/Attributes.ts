export default class Attributes<T> {
	// Initilization of the data object to
	// store information about a particular type.
	constructor(private data: T) {}

	// Get the piece of data from object.
	// K can only ever be of the Key of T
	get<K extends keyof T>(key: K): T[K] {
		return this.data[key];
	}

	// Set the data to the object.
	set(update: T): void {
		Object.assign(this.data, update);
	}
}

/*
Sample code to explain "get<K extends keyof T>(key: K): T[K]"
const attrs = new Attributes<UserProps>({
	id: 5,
	age: 20,
	name: 'asdf'
});

const name = attrs.get('name');
const age = attrs.get('id');
*/
