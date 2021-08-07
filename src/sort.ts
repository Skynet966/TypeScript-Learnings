import Sorter from './Sorter';
import NumebrsCollection from './NumbersCollection';
import CharactersCollection from './CharactersCollection';

const charactersCollection = new CharactersCollection('satish');
const numbersCollection = new NumebrsCollection([7, 6, 5, 4, 3, 2, 1]);
const charSorter = new Sorter(charactersCollection);
const numbSorter = new Sorter(numbersCollection);

//Sorting and print charactersCollection
charSorter.printData();
charSorter.sort();
charSorter.printData();

//Sorting and print numbersCollection
numbSorter.printData();
numbSorter.sort();
numbSorter.printData();
