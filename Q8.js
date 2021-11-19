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
exports.__esModule = true;
var Q7_1 = require("./Q7");
var saleprice;
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(data) {
        var _this = _super.call(this, data) || this;
        _this.weight = data.weight;
        return _this;
    }
    return Truck;
}(Q7_1.Car));
var t = { weight: 3000, speed: 150, regularPrice: 3000000, color: 'white' };
function getSalePrice() {
    if (t.weight > 2000) {
        saleprice = t.regularPrice - (t.regularPrice * 0.1);
        console.log("the 10 per discount then :" + saleprice);
    }
    else {
        saleprice = t.regularPrice - (t.regularPrice * 0.2);
        console.log("the 20 per discount then :" + saleprice);
    }
}
getSalePrice();
