"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var MatchReader = (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.readFromCsv = function (filename) {
        return new MatchReader(new CsvFileReader_1.default(filename + '.csv'));
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) { return [
            utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ]; });
    };
    return MatchReader;
}());
exports.default = MatchReader;
//# sourceMappingURL=MatchReader.js.map