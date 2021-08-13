import { MatchResult } from './MatchResult';
import CsvFileReader from './CsvFileReader';
import MatchReader from './MatchReader';

//Create an object that satisfies the 'DataReader' Interface
const csvFileReader = new CsvFileReader('football.csv');
//Create  an instance of MatchREader and pass in something stisfying the 'Data Reader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches

let manUnitedWins = 0;

for (let match of matchReader.matches) {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
}

console.log('Man United won ' + manUnitedWins + ' games.');
