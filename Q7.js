"use strict";
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(data) {
        this.speed = data.speed || 100;
        this.regularPrice = data.regularPrice || 1000000;
        this.color = data.color || 'black';
    }
    return Car;
}());
exports.Car = Car;
