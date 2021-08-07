import Sorter from './Sorter';
import LinkedList from './LinkList';
import NumebrsCollection from './NumbersCollection';
import CharactersCollection from './CharactersCollection';

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(3);
linkedList.add(9);
linkedList.add(1);
linkedList.add(4);
const lnkLstSorter = new Sorter(linkedList);
//Sorting and print linkedList
lnkLstSorter.printData();
lnkLstSorter.sort();
lnkLstSorter.printData();

const charactersCollection = new CharactersCollection('satish');
const charSorter = new Sorter(charactersCollection);
//Sorting and print charactersCollection
charSorter.printData();
charSorter.sort();
charSorter.printData();

const numbersCollection = new NumebrsCollection([7, 6, 5, 4, 3, 2, 1]);
const numbSorter = new Sorter(numbersCollection);
//Sorting and print numbersCollection
numbSorter.printData();
numbSorter.sort();
numbSorter.printData();
