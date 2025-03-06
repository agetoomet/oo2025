var Sooritatud = /** @class */ (function () {
    function Sooritatud() {
        this.hinded = [];
        this.ainepunktid = [];
    }
    // Lisa hinne ja ainepunkt
    Sooritatud.prototype.lisa = function (hinne, ainepunkt) {
        this.hinded.push(hinne);
        this.ainepunktid.push(ainepunkt);
    };
    // Arvuta kaalutud keskmine
    Sooritatud.prototype.keskmine = function () {
        var summa = 0;
        var korrutis = 0;
        var keskmine = 0;
        for (var i = 0; i < this.ainepunktid.length; i++) {
            summa += this.ainepunktid[i];
            korrutis += this.hinded[i] * this.ainepunktid[i];
            keskmine = korrutis / summa;
        }
        return keskmine;
    };
    return Sooritatud;
}());
var aineKogum = new Sooritatud();
// Funktsioon aine lisamiseks ja kuvamiseks
function lisaAine() {
    var hinneElement = document.getElementById("hinne");
    var ainepunktidElement = document.getElementById("ainepunktid");
    var hinne = Number(hinneElement.value);
    var ainepunktid = Number(ainepunktidElement.value);
    // Lisa aine andmed
    aineKogum.lisa(hinne, ainepunktid);
}
