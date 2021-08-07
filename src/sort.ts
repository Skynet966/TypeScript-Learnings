import LinkedList from './LinkedList';
import NumebrsCollection from './NumbersCollection';
import CharactersCollection from './CharactersCollection';

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(3);
linkedList.add(9);
linkedList.add(1);
linkedList.add(4);
//Sorting and print linkedList
linkedList.printData();
linkedList.sort();
linkedList.printData();

const charactersCollection = new CharactersCollection('satish');
//Sorting and print charactersCollection
charactersCollection.printData();
charactersCollection.sort();
charactersCollection.printData();

const numbersCollection = new NumebrsCollection([7, 6, 5, 4, 3, 2, 1]);
//Sorting and print numbersCollection
numbersCollection.printData();
numbersCollection.sort();
numbersCollection.printData();
