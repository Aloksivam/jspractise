// console.log(multiply(4,5))
// console.log(multiply("alok",5))
function add(a, b, c) {
    return a + b + (c || 0);
}
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ divisor: 3, dividend: 454 }));
console.log(divide({ dividend: 454, divisor: 3 }));
function printName(name) {
    if (name === void 0) { name = "alok"; }
    console.log(name);
}
// function somet(name?,roll){
// }
// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
// Example
function addition(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
console.log(addition(1, 2, 3, 4, 7, 8));
