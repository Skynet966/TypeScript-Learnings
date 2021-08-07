import Sorter from './Sorter';

export default class NumebrsCollection extends Sorter {
	constructor(public data: number[]) {
		super();
	}
	printData(): void {
		console.log(...this.data);
	}
	//Getter for the length of the array of numbers
	get length(): number {
		return this.data.length;
	}
	compare(leftIndex: number): boolean {
		return this.data[leftIndex] > this.data[leftIndex + 1];
	}
	swap(leftIndex: number): void {
		this.data[leftIndex] = this.data[leftIndex] + this.data[leftIndex + 1];
		this.data[leftIndex + 1] = this.data[leftIndex] - this.data[leftIndex + 1];
		this.data[leftIndex] = this.data[leftIndex] - this.data[leftIndex + 1];
	}
}
