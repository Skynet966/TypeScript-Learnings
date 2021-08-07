"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = (function () {
    function Sorter() {
    }
    Sorter.prototype.printData = function () {
        console.log('-----Data Values-----');
        this.printData();
        console.log('---------END---------');
    };
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                this.compare(j) ? this.swap(j) : null;
            }
        }
    };
    return Sorter;
}());
exports.default = Sorter;
//# sourceMappingURL=Sorter.js.map