import Model from './Model';
import Attributes from './Attributes';
import ApiSync from './ApiSync';
import Eventing from './Eventing';
import Collection from './Collection';

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export default class User extends Model<UserProps> {
	static buildUser(attrs: UserProps): User {
		return new User(
			new Attributes<UserProps>(attrs),
			new Eventing(),
			new ApiSync<UserProps>('users')
		);
	}
	static buildUserCollection(): Collection<User, UserProps> {
		return new Collection<User, UserProps>('users', (json: UserProps) =>
			User.buildUser(json)
		);
	}
}
