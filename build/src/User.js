"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("faker");
class User {
    name;
    location;
    constructor() {
        this.name = faker_1.name.firstName();
        this.location = {
            lat: parseFloat(faker_1.address.latitude()),
            lng: parseFloat(faker_1.address.longitude())
        };
    }
    markerContent() {
        return `<div><h3>User Name: ${this.name}</h3></div>`;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map