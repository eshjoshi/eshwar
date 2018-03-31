var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.display = function () {
        console.log("value x" + " " + this._x + "  " + "value y" + " " + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y; // properties acces specifer set Y
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var pointObject = new Point(1, 2); //optional paramiter
pointObject.x = 10; //call setx function pass value as argument
var x = pointObject.x;
pointObject.y = 20;
var y = pointObject.y;
console.log(pointObject);
console.log("x:" + x + " " + "y:" + y); // display value
