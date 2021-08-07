"use strict";
let apples = 5;
let speed = 'fast';
let isItReal = true;
let empty = null;
let nothing = undefined;
let now = new Date();
const colors = ['red', 'green', 'blue', 'pink'];
const random = [1, 23, 3.2, 0.0];
const truths = [true, false, true];
class Car {
}
const car = new Car();
const point = { x: 20, y: 44.3 };
const logNumber = (i) => {
    console.log(i);
};
const sumOfNumbers = (a, b) => {
    return a + b;
};
function divideNumbers(a, b) {
    return a / b;
}
const multiplyNumbers = function (a, b) {
    return a * b;
};
const logger = (message) => {
    console.log(message);
};
const neverReturnValue = (message) => {
    throw new Error(message);
};
const destructParams = ({ date, weather }) => {
    console.log(date, weather);
};
const profile = ({ name: { first, middle, last }, age }) => {
    console.log(name, age);
};
const json = '{"x":10,"y":20}';
const cooordinates = JSON.parse(json);
console.log(cooordinates);
let words = ['hello', 'world', 'you', 'are', 'beautiful'];
let foundword;
words.forEach(val => {
    foundword = val === 'word' ? true : false;
});
let numbers = [-10, -1, 12];
let numberAboveZero = false;
numbers.forEach(val => {
    numberAboveZero = val > 0 ? val : false;
});
//# sourceMappingURL=typeAnnotation.js.map