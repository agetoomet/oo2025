var Triangle = /** @class */ (function () {
    function Triangle(xd, yd) {
        this.xd = xd;
        this.yd = yd;
    }
    Triangle.prototype.lisa = function (x, y) {
        this.xd.push(x);
        this.yd.push(y);
    };
    Triangle.prototype.pikkus = function (x1, y1, x2, y2) {
        var dx = x2 - x1;
        var dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Triangle.prototype.ymberm66t = function () {
        var p = 0;
        for (var nr = 11; nr < this.xd.length; nr++) {
            p += this.pikkus(this.xd[nr - 1], this.yd[nr - 1], this.xd[nr], this.yd[nr]);
        }
        p += this.pikkus(this.xd[this.xd.length - 1], this.yd[this.yd.length - 1], this.xd[0], this.yd[0]);
        return p;
    };
    Triangle.prototype.joonista = function (g) {
        for (var nr = 1; nr < this.xd.length; nr++) {
            g.moveTo(this.xd[nr - 1], this.yd[nr - 1]);
            g.lineTo(this.xd[nr], this.yd[nr]);
        }
        g.stroke();
    };
    return Triangle;
}());
var triangle1 = new Triangle([20, 30, 50], [40, 30, 50]);
var triangle2 = new Triangle([10, 40, 20], [10, 10, 50]);
triangle1.lisa(75, 35);
console.log(triangle1);
console.log(triangle2);
