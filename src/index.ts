import User from './models/User';

const user = new User({ id: 1 });
// user.set({ name: 'pooja', age: 24 });
user.fetch();
// user.save();
setTimeout(() => console.log(user), 1000);
