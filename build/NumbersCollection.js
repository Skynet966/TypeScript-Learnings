"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumebrsCollection = (function () {
    function NumebrsCollection(data) {
        this.data = data;
    }
    NumebrsCollection.prototype.printData = function () {
        console.log.apply(console, this.data);
    };
    Object.defineProperty(NumebrsCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumebrsCollection.prototype.compare = function (leftIndex) {
        return this.data[leftIndex] > this.data[leftIndex + 1];
    };
    NumebrsCollection.prototype.swap = function (leftIndex) {
        this.data[leftIndex] = this.data[leftIndex] + this.data[leftIndex + 1];
        this.data[leftIndex + 1] = this.data[leftIndex] - this.data[leftIndex + 1];
        this.data[leftIndex] = this.data[leftIndex] - this.data[leftIndex + 1];
    };
    return NumebrsCollection;
}());
exports.default = NumebrsCollection;
//# sourceMappingURL=NumbersCollection.js.map