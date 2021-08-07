"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SpaceShip = (function () {
    function SpaceShip(isNew) {
        this.isNew = isNew;
        this.color = 'silver';
    }
    SpaceShip.prototype.hyperDrive = function () {
        console.log('chugga chugga');
    };
    SpaceShip.prototype.superDrive = function () {
        console.log('beep beep');
    };
    SpaceShip.prototype.repairDrive = function () {
        console.log('Drive is repaired');
    };
    return SpaceShip;
}());
var EnterpriseShip = (function (_super) {
    __extends(EnterpriseShip, _super);
    function EnterpriseShip(color, length, isNew) {
        var _this = _super.call(this, isNew) || this;
        _this.color = color;
        _this.length = length;
        _this.isNew = isNew;
        return _this;
    }
    EnterpriseShip.prototype.galacticDrive = function () {
        console.log('romm romm');
    };
    EnterpriseShip.prototype.hyperDrive = function () {
        console.log('vroom vroom');
    };
    EnterpriseShip.prototype.starTrekProps = function () {
        console.log((this.isNew ? 'Brand new' : 'Old one') + " StartTrek Enterprise is of " + this.color + " color and with length " + this.length + " meter");
    };
    return EnterpriseShip;
}(SpaceShip));
var enterpriseShip = new SpaceShip(true);
enterpriseShip.hyperDrive();
enterpriseShip.superDrive();
var startTrekShip = new EnterpriseShip('blue', 324, false);
startTrekShip.galacticDrive();
startTrekShip.hyperDrive();
startTrekShip.superDrive();
startTrekShip.starTrekProps();
//# sourceMappingURL=classes.js.map