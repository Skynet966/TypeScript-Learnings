import Collection from './models/Collection';
import User, { UserProps } from './models/User';

const collection = new Collection<User, UserProps>('users', (json: UserProps) =>
	User.buildUser(json)
);
collection.on('change', () =>
	console.log('Collection has been changed:::', collection)
);
collection.fetch();
