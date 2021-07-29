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

//When to use annotations
// 1) Function that return the 'any' type
const json = '{"x":10,"y":20}';
const cooordinates: { x: number; y: number } = JSON.parse(json); //To avoid any use annotation
console.log(cooordinates); //{x:10,y:20}

// 2) When we declare a variable on one line and init it later
let words = ['hello', 'world', 'you', 'are', 'beautiful'];
let foundword: boolean;

words.forEach(val => {
	foundword = val === 'word' ? true : false;
});

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
numbers.forEach(val => {
	numberAboveZero = val > 0 ? val : false;
});
