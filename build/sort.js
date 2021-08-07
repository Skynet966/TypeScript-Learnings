"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = __importDefault(require("./Sorter"));
var NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
var CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
var charactersCollection = new CharactersCollection_1.default('satish');
var numbersCollection = new NumbersCollection_1.default([7, 6, 5, 4, 3, 2, 1]);
var charSorter = new Sorter_1.default(charactersCollection);
var numbSorter = new Sorter_1.default(numbersCollection);
charSorter.printData();
charSorter.sort();
charSorter.printData();
numbSorter.printData();
numbSorter.sort();
numbSorter.printData();
//# sourceMappingURL=sort.js.map