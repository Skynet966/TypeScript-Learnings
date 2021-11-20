import User from './models/User';

const user = new User({ id: 1, name: 'punit', age: 12 });

user.on('change', () => console.log(user));
user.on('save', () => console.log('user has been saved ::: ', user));
user.save();

//Reminder on how 'this' works in javascript
// const colors = {
// 	color: 'red',
// 	printColor() {
// 		console.log(this.color);
// 	}
// };

// colors.printColor();
