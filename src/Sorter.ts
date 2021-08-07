import CharactersCollection from './CharactersCollection';
import NumebrsCollection from './NumbersCollection';
import LinkedList from './LinkList';

export interface ISortable {
	get length(): number;
	swap(leftIndex: number): void;
	compare(leftIndex: number): boolean;
	printData(): void;
}

interface ISorter {
	printData(): void;
	sort(): void;
}

//Generic Sorting logic
export default class Sorter implements ISorter {
	constructor(
		private collection: NumebrsCollection | CharactersCollection | LinkedList
	) {}
	printData(): void {
		console.log('-----Data Values-----');
		this.collection.printData();
		console.log('---------END---------');
	}
	sort(): void {
		const { length } = this.collection;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				this.collection.compare(j) ? this.collection.swap(j) : null;
			}
		}
	}
}
