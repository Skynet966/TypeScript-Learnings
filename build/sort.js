"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = __importDefault(require("./LinkedList"));
var NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
var CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
var linkedList = new LinkedList_1.default();
linkedList.add(5);
linkedList.add(3);
linkedList.add(9);
linkedList.add(1);
linkedList.add(4);
linkedList.printData();
linkedList.sort();
linkedList.printData();
var charactersCollection = new CharactersCollection_1.default('satish');
charactersCollection.printData();
charactersCollection.sort();
charactersCollection.printData();
var numbersCollection = new NumbersCollection_1.default([7, 6, 5, 4, 3, 2, 1]);
numbersCollection.printData();
numbersCollection.sort();
numbersCollection.printData();
//# sourceMappingURL=sort.js.map