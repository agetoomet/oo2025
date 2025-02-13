var Resistor = /** @class */ (function () {
    function Resistor(r, maxP) {
        this.r = 0;
        this.maxP = 0;
        this.r = r;
        this.maxP = maxP;
    }
    Resistor.prototype.getCurrent = function (u) {
        return u / this.r;
    };
    Resistor.prototype.getPower = function (u) {
        return u * this.getCurrent(u);
    };
    Resistor.prototype.isVoltageAllowed = function (u) {
        return this.getPower(u) <= this.maxP;
    };
    return Resistor;
}());
var r1 = new Resistor(220, 0.5);
var r2 = new Resistor(220, 0.25);
var r3 = new Resistor(220, 1.0);
console.log(r1.getPower(10));
console.log(r1.isVoltageAllowed(12));
var rs = [r1, r2, r3];
var v1 = [];
for (var _i = 0, rs_1 = rs; _i < rs_1.length; _i++) {
    var r = rs_1[_i];
    if (r.isVoltageAllowed(10)) {
        v1.push(r);
    }
}
console.log(v1);
console.log(rs.filter(function (r) { return r.isVoltageAllowed(10); }));
