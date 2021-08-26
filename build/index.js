"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = __importDefault(require("./MatchReader"));
var Summary_1 = __importDefault(require("./Summary"));
var matchReader = MatchReader_1.default.readFromCsv('football');
matchReader.load();
var summary = Summary_1.default.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
//# sourceMappingURL=index.js.map