"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Company_1 = __importDefault(require("./Company"));
var User_1 = __importDefault(require("./User"));
var Map_1 = __importDefault(require("./Map"));
var user = new User_1.default();
var company = new Company_1.default();
var map = new Map_1.default('map');
map.addMarker(user, 'User');
map.addMarker(company, 'Company');
console.log(user, company);
//# sourceMappingURL=index.js.map