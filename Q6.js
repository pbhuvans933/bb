"use strict";
exports.__esModule = true;
exports.T_shirt = void 0;
var T_shirt = /** @class */ (function () {
    function T_shirt(data) {
        this.color = data.color || 'black';
        this.material = data.material || 'cotton';
        this.design = data.proprice || 'polo';
        this.size = data.size || 's';
    }
    return T_shirt;
}());
exports.T_shirt = T_shirt;
