//Basic example of Typescript in use.

import axios from 'axios';

interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

//create a new instance
const url: string = 'https://jsonplaceholder.typicode.com/todos/1';
axios
	.get(url)
	.then(response => {
		const { id, title, completed } = response.data as Todo;
		logTodo(id, title, completed);
	})
	.catch(errors => console.log(errors));

const logTodo = (id: number, title: string, completed: boolean) =>
	console.log(id, title, completed);
//Change the text on the page
// let webHeading = document.querySelector('h1');
// webHeading!.textContent = 'h';
