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
	.then((response) => {
		const { id, title, completed } = response.data as Todo;
		logTodo(id, title, completed);
	})
	.catch((errors) => console.log(errors));

let webId = document.querySelector('h2');
let webTitle = document.querySelector('h3');
let webStatus = document.querySelector('h4');
const logTodo = (id: number, title: string, completed: boolean) => {
	webId!.textContent = `Id: ${id}`;
	webTitle!.textContent = `Title: ${title}`;
	webStatus!.textContent = `Is Completed: ${completed}`;
};

//Use "parcel index.html" to run the program
