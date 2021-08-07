"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = __importDefault(require("./Company"));
const User_1 = __importDefault(require("./User"));
const Map_1 = __importDefault(require("./Map"));
const user = new User_1.default();
const company = new Company_1.default();
const map = new Map_1.default('map');
map.addMarker(user, 'User');
map.addMarker(company, 'Company');
console.log(user, company);
//# sourceMappingURL=index.js.map