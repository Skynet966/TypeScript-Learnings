import { MatchData } from './MatchData';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import CsvFileReader from './CsvFileReader';

interface DataReader {
	read(): void;
	data: string[][];
}

export default class MatchReader {
	matches: MatchData[] = [];
	static readFromCsv(filename: string): MatchReader {
		return new MatchReader(new CsvFileReader(filename + '.csv'));
	}
	constructor(public reader: DataReader) {}
	load(): void {
		this.reader.read();
		this.matches = this.reader.data.map(
			(row: string[]): MatchData => [
				dateStringToDate(row[0]),
				row[1],
				row[2],
				parseInt(row[3]),
				parseInt(row[4]),
				row[5] as MatchResult,
				row[6]
			]
		);
	}
}
