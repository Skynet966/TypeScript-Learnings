"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("faker");
var User = (function () {
    function User() {
        this.name = faker_1.name.firstName();
        this.location = {
            lat: parseFloat(faker_1.address.latitude()),
            lng: parseFloat(faker_1.address.longitude())
        };
    }
    User.prototype.markerContent = function () {
        return "<div><h3>User Name: " + this.name + "</h3></div>";
    };
    return User;
}());
exports.default = User;
//# sourceMappingURL=User.js.map