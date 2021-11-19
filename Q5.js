"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    /* gst:number;
     totalprice:number;*/
    function Product(data) {
        this.proid = data.proid || 1234;
        this.proname = data.proname || 'laptop';
        this.proprice = data.proprice || 32000;
    }
    return Product;
}());
exports.Product = Product;
