"use strict";
var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name: " + this.name + " Year: " + this.year + " Broken?: " + this.broken;
    }
};
var beverage = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My drink has " + this.sugar + " grams of sugar.";
    }
};
var printVehicle = function (vehicle) {
    console.log(vehicle.summary());
};
var printSummary = function (item) {
    console.log(item.summary());
};
printVehicle(oldCivic);
printSummary(oldCivic);
printSummary(beverage);
//# sourceMappingURL=interfaces.js.map