function Keskmine(arv1, arv2, arv3) {
    var arvudeKeskmine = 0;
    arvudeKeskmine = (arv1 + arv2 + arv3) / 3;
    return arvudeKeskmine;
}
function Libisev(massiiv) {
    if (massiiv === void 0) { massiiv = []; }
    //SMA = n perioodide hindade summa / n --libisev keskmine
    var tulemus = [];
    for (var i = 0; i < massiiv.length - 2; i++) {
        var keskmine = (massiiv[i] + massiiv[i + 1] + massiiv[i + 2]) / 3;
        tulemus.push(keskmine);
    }
    return tulemus;
}
var Arvud = /** @class */ (function () {
    function Arvud() {
        this.massiiv = [];
        this.libisevMassiiv = [];
    }
    Arvud.prototype.lisaArv = function (arv) {
        this.massiiv.push(arv);
        var n = this.massiiv.length;
        if (n >= 3) {
            var uusKeskmine = (this.massiiv[n - 3] + this.massiiv[n - 2] + this.massiiv[n - 1]) / 3;
            this.libisevMassiiv.push(uusKeskmine);
        }
    };
    Arvud.prototype.libisevKeskmine = function () {
        return this.libisevMassiiv;
    };
    return Arvud;
}());
console.log(Keskmine(2, 6, 9));
console.log(Libisev([1, 4, 7, 3, 3]));
var hoidla = new Arvud();
hoidla.lisaArv(1);
hoidla.lisaArv(4);
hoidla.lisaArv(7);
hoidla.lisaArv(3);
hoidla.lisaArv(3);
console.log(hoidla.libisevKeskmine());
