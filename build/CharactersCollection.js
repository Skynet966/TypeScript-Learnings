"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    CharactersCollection.prototype.printData = function () {
        console.log.apply(console, this.data.split(''));
    };
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex) {
        return (this.data[leftIndex].toLowerCase() >
            this.data[leftIndex + 1].toLowerCase());
    };
    CharactersCollection.prototype.swap = function (leftIndex) {
        var characters = this.data.split('');
        var leftHand = characters[leftIndex];
        characters[leftIndex] = characters[leftIndex + 1];
        characters[leftIndex + 1] = leftHand;
        this.data = characters.join('');
    };
    return CharactersCollection;
}());
exports.default = CharactersCollection;
//# sourceMappingURL=CharactersCollection.js.map