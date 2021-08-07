"use strict";
var apples = 5;
var speed = 'fast';
var isItReal = true;
var empty = null;
var nothing = undefined;
var now = new Date();
var colors = ['red', 'green', 'blue', 'pink'];
var random = [1, 23, 3.2, 0.0];
var truths = [true, false, true];
var Car = (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
var point = { x: 20, y: 44.3 };
var logNumber = function (i) {
    console.log(i);
};
var sumOfNumbers = function (a, b) {
    return a + b;
};
function divideNumbers(a, b) {
    return a / b;
}
var multiplyNumbers = function (a, b) {
    return a * b;
};
var logger = function (message) {
    console.log(message);
};
var neverReturnValue = function (message) {
    throw new Error(message);
};
var destructParams = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date, weather);
};
var profile = function (_a) {
    var _b = _a.name, first = _b.first, middle = _b.middle, last = _b.last, age = _a.age;
    console.log(name, age);
};
var json = '{"x":10,"y":20}';
var cooordinates = JSON.parse(json);
console.log(cooordinates);
var words = ['hello', 'world', 'you', 'are', 'beautiful'];
var foundword;
words.forEach(function (val) {
    foundword = val === 'word' ? true : false;
});
var numbers = [-10, -1, 12];
var numberAboveZero = false;
numbers.forEach(function (val) {
    numberAboveZero = val > 0 ? val : false;
});
//# sourceMappingURL=typeAnnotation.js.map