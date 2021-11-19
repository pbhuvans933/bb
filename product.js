"use strict";
exports.__esModule = true;
var gst = 200;
var totalprice;
var p = { proid: 456, proname: 'iphone', proprice: 15000 };
console.log("the proid is " + p.proid + "  the proname is " + p.proname + "  the proprice is " + p.proprice);
function Price() {
    totalprice = p.proprice + gst;
    console.log("the total price is :" + totalprice);
}
Price();
