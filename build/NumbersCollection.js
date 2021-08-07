"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = __importDefault(require("./Sorter"));
var NumebrsCollection = (function (_super) {
    __extends(NumebrsCollection, _super);
    function NumebrsCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
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
}(Sorter_1.default));
exports.default = NumebrsCollection;
//# sourceMappingURL=NumbersCollection.js.map