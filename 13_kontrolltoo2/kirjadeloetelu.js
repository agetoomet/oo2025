var Kiri = /** @class */ (function () {
    function Kiri(pealkiri, sisu) {
        this.pealkiri = pealkiri;
        this.sisu = sisu;
    }
    return Kiri;
}());
var KirjadeKogum = /** @class */ (function () {
    function KirjadeKogum() {
        this.kirjad = [];
    }
    KirjadeKogum.prototype.lisaKiri = function (kiri) {
        this.kirjad.push(kiri);
    };
    return KirjadeKogum;
}());
var kogum = new KirjadeKogum();
var kiri1 = new Kiri("Tere", "See on mu kõige esimene kiri");
var kiri2 = new Kiri("Ilm", "Täna on päikseline ja üsna soe");
kogum.lisaKiri(kiri1);
kogum.lisaKiri(kiri2);
console.log("Kogumis on järgnevad kirjad: ", kogum);
