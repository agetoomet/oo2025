var Sooritatud = /** @class */ (function () {
    function Sooritatud(hinded, ainepunktid) {
        this.hinded = [];
        this.ainepunktid = [];
        this.hinded = hinded;
        this.ainepunktid = ainepunktid;
    }
    Sooritatud.prototype.lisa = function (hinne, ainepunkt) {
        this.hinded.push(hinne);
        this.ainepunktid.push(ainepunkt);
    };
    Sooritatud.prototype.keskmine = function () {
        //Kaalutud keskmise arvutamisel korrutatakse ainete eest saadud hinnete numbrilised väärtused aine eest saadud 
        // ainepunktide arvuga ning jagatakse läbi ainepunktide koguarvuga.
        var summa = 0;
        var korrutis = 0;
        for (var nr = 0; nr < this.ainepunktid.length; nr++) {
            summa += this.ainepunktid[nr];
            korrutis += this.hinded[nr] * this.ainepunktid[nr];
        }
        var kaalutudKeskmine = 0;
        kaalutudKeskmine = korrutis / summa;
        return kaalutudKeskmine;
    };
    return Sooritatud;
}());
function koguKlassiKeskmine(ained) {
    var koguHinneAinepunkt = 0;
    var koguAinepunktid = 0;
    var koguKeskmine = 0;
    for (var _i = 0, ained_1 = ained; _i < ained_1.length; _i++) {
        var aine = ained_1[_i];
        for (var i = 0; i < aine.hinded.length; i++) {
            koguHinneAinepunkt += aine.hinded[i] * aine.ainepunktid[i];
            koguAinepunktid += aine.ainepunktid[i];
        }
    }
    koguKeskmine = koguHinneAinepunkt / koguAinepunktid;
    return koguKeskmine;
}
var aine1 = new Sooritatud([3], [6]);
var aine2 = new Sooritatud([4], [6]);
var aine3 = new Sooritatud([5], [3]);
aine1.lisa(3, 4);
aine2.lisa(4, 6);
aine3.lisa(5, 3);
var keskmineHinne = koguKlassiKeskmine([aine1, aine2, aine3]);
console.log("Sooritatud ainete keskmine ", keskmineHinne);
