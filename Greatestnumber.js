var var1 = 12;
var var2 = 25;
var var3 = 89;
var largest;
if (var1 >= var2 && var1 >= var3) {
    largest = var1;
}
else if (var2 >= var1 && var2 >= var3) {
    largest = var2;
}
else {
    largest = var3;
}
console.log("the largest number is:".concat(largest));
