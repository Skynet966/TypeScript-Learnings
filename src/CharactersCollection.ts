import { ISortable } from './Sorter';

export default class CharactersCollection implements ISortable {
	constructor(public data: string) {}
	printData(): void {
		console.log(...this.data.split(''));
	}
	//Getter for the length of the array of numbers
	get length(): number {
		return this.data.length;
	}
	compare(leftIndex: number): boolean {
		return (
			this.data[leftIndex].toLowerCase() >
			this.data[leftIndex + 1].toLowerCase()
		);
	}
	swap(leftIndex: number): void {
		const characters = this.data.split('');
		const leftHand = characters[leftIndex];
		characters[leftIndex] = characters[leftIndex + 1];
		characters[leftIndex + 1] = leftHand;
		this.data = characters.join('');
	}
}
