class ArrayOfNumbers {
	constructor(public collection: number[]) {}
	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfStrings {
	constructor(public collection: string[]) {}
	get(index: number): string {
		return this.collection[index];
	}
}

//Generic class
class ArrayOfAnything<T> {
	constructor(public collection: T[]) {}
	get(index: number): T {
		return this.collection[index];
	}
}

const arr = new ArrayOfAnything(['a', 'b', 'c', 'd']);

//Example of generics with functions

function printStrings(arr: string[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printNumbers(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

//Generic function that can print any type of array values
function printAnything<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

//Generlize type annotation for generic function (Recommended)
printAnything<string>(['a', 'b', 'c']);
//Type infrence comes in picture
printAnything(['a', 'b', 'c']);

//Genric Constraints

class SuperCar {
	print() {
		console.log('I am a Super Car');
	}
}

class House {
	print() {
		console.log('I am a House');
	}
}

//We provide a constraint on the generic Varibale by extending interface
interface Printable {
	print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		arr[i].print();
	}
}

printHousesOrCars([new House, new House]);
printHousesOrCars([new SuperCar(), new SuperCar()]);
