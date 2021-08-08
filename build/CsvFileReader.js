"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var fs_1 = require("fs");
var CsvFileReader = (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
        this.mapRow = function (row) { return [
            utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ]; };
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map(function (row) { return row.split(','); })
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.default = CsvFileReader;
//# sourceMappingURL=CsvFileReader.js.map