import User from './models/User';
import UserEdit from './views/UserEdit';

const rootElement = document.getElementById('root');

if (rootElement) {
	const userEdit = new UserEdit(
		rootElement,
		User.buildUser({ name: 'amit', age: 20 })
	);
	userEdit.render();
} else {
	throw new Error('Root element not found!');
}
