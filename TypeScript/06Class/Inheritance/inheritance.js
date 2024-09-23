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
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.intro = function () {
        console.log("i am present inside rectange");
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        var _this = _super.call(this, side, side) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.intro = function () {
        console.log("i am present inside square");
    };
    return Square;
}(Rectangle));
var rect1 = new Rectangle(12, 23);
console.log(rect1.getArea());
console.log(new Square(12).intro());
console.log(new Square(12).getArea());
// A class can implement multiple interfaces sby listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored {
