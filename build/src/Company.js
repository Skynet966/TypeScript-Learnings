"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("faker");
class Company {
    name;
    catchPhrase;
    location;
    constructor() {
        this.name = faker_1.company.companyName();
        this.catchPhrase = faker_1.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker_1.address.latitude()),
            lng: parseFloat(faker_1.address.longitude())
        };
    }
    markerContent() {
        return `<div><h3>Company Name: ${this.name}</h3><h5>Catchphrase: ${this.catchPhrase}</h5></div>`;
    }
}
exports.default = Company;
//# sourceMappingURL=Company.js.map