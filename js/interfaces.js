"use strict";
const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name} Year: ${this.year} Broken?: ${this.broken}`;
    }
};
const beverage = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary() {
        return `My drink has ${this.sugar} grams of sugar.`;
    }
};
const printVehicle = (vehicle) => {
    console.log(vehicle.summary());
};
const printSummary = (item) => {
    console.log(item.summary());
};
printVehicle(oldCivic);
printSummary(oldCivic);
printSummary(beverage);
//# sourceMappingURL=interfaces.js.map