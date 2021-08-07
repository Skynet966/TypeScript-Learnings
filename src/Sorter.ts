import CharactersCollection from './CharactersCollection';
import NumebrsCollection from './NumbersCollection';
import LinkedList from './LinkedList';

export interface ISortable {
	get length(): number;
	swap(leftIndex: number): void;
	compare(leftIndex: number): boolean;
	printData(): void;
}

//Generic Sorting logic
export default abstract class Sorter implements ISortable {
	sort(): void {
		const { length } = this;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				this.compare(j) ? this.swap(j) : null;
			}
		}
	}

	abstract get length(): number;
	abstract swap(leftIndex: number): void;
	abstract compare(leftIndex: number): boolean;
	abstract printData(): void;
}
