"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var HtmlReport = (function () {
    function HtmlReport() {
    }
    HtmlReport.prototype.print = function (report) {
        var html = "<div><h1>Analysis Output</h1><div>" + report + "</div></div>";
        fs_1.writeFileSync(__dirname + '/../../src/reports/report.html', html);
    };
    return HtmlReport;
}());
exports.default = HtmlReport;
//# sourceMappingURL=HtmlReport.js.map