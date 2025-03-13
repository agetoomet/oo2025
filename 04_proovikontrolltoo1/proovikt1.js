var Triangle = /** @class */ (function () {
    function Triangle(xd, yd) {
        this.xd = xd;
        this.yd = yd;
    }
    return Triangle;
}());
var triangle1 = new Triangle([20, 30, 50], [40, 30, 50]);
var triangle2 = new Triangle([10, 40, 20], [10, 10, 50]);
console.log(triangle1);
console.log(triangle2);
