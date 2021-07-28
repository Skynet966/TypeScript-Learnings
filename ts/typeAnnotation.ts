//Premitives
let apples: number = 5;
let speed: string = 'fast';
let isItReal: boolean = true;

let empty: null = null;
let nothing: undefined = undefined;

//built in Objects
let now: Date = new Date();

//Array
const colors: string[] = ['red', 'green', 'blue', 'pink'];
const random: number[] = [1, 23, 3.2, 0.0];
const truths: boolean[] = [true, false, true];

//Custom class
class Car {}
const car: Car = new Car();

//Object literal
const point: { x: number; y: number } = { x: 20, y: 44.3 };

//Function
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};
