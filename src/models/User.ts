import Attributes from './Attributes';
import Eventing from './Eventing';
import Sync from './Sync';

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

// User Class consist of all User action and properties that create a User Profile
// attributes: Attributes :- Gives use the ability to store properties tied to this user (name, age, etc).
// events: Events :- Gives us the ability to tell other parts of our application whenever data tied to a particular user is changed.
// sync: Sync :- Gives us the ability to save this persons data to a remote server, then retrieve it in the future.
export default class User {
	public sync: Sync<UserProps> = new Sync<UserProps>('users');
	public events: Eventing = new Eventing();
	public attributes: Attributes<UserProps>;
	constructor(attrs: UserProps) {
		this.attributes = new Attributes<UserProps>(attrs);
	}
}
