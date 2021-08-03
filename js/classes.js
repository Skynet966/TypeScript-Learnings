"use strict";
class SpaceShip {
    isNew;
    color = 'silver';
    constructor(isNew) {
        this.isNew = isNew;
    }
    hyperDrive() {
        console.log('chugga chugga');
    }
    superDrive() {
        console.log('beep beep');
    }
    repairDrive() {
        console.log('Drive is repaired');
    }
}
class EnterpriseShip extends SpaceShip {
    color;
    length;
    isNew;
    constructor(color, length, isNew) {
        super(isNew);
        this.color = color;
        this.length = length;
        this.isNew = isNew;
    }
    galacticDrive() {
        console.log('romm romm');
    }
    hyperDrive() {
        console.log('vroom vroom');
    }
    starTrekProps() {
        console.log(`${this.isNew ? 'Brand new' : 'Old one'} StartTrek Enterprise is of ${this.color} color and with length ${this.length} meter`);
    }
}
const enterpriseShip = new SpaceShip(true);
enterpriseShip.hyperDrive();
enterpriseShip.superDrive();
const startTrekShip = new EnterpriseShip('blue', 324, false);
startTrekShip.galacticDrive();
startTrekShip.hyperDrive();
startTrekShip.superDrive();
startTrekShip.starTrekProps();
//# sourceMappingURL=classes.js.map