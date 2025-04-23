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
var Mangija = /** @class */ (function () {
    function Mangija(nimi) {
        this.nimi = nimi;
    }
    return Mangija;
}());
var InimMangija = /** @class */ (function (_super) {
    __extends(InimMangija, _super);
    function InimMangija() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InimMangija.prototype.paku = function () {
        var sisend = document.getElementById("pakkumine");
        return parseInt(sisend.value);
    };
    return InimMangija;
}(Mangija));
var Mäng = /** @class */ (function () {
    function Mäng() {
        this.mangija = new InimMangija("Mängija");
        this.sihtarv = this.genereeriArv();
        this.katsed = 0;
        this.seaKuularid();
    }
    Mäng.prototype.genereeriArv = function () {
        return Math.floor(Math.random() * 100) + 1;
    };
    Mäng.prototype.seaKuularid = function () {
        var _this = this;
        document.getElementById("kontrolli").addEventListener("click", function () { return _this.kontrolli(); });
        document.getElementById("uusMang").addEventListener("click", function () { return _this.reset(); });
    };
    Mäng.prototype.kontrolli = function () {
        var pakkumine = this.mangija.paku();
        this.katsed++;
        var teade = document.getElementById("teade");
        var katsedEl = document.getElementById("katsed");
        if (isNaN(pakkumine)) {
            teade.textContent = "Palun sisesta korrektne number!";
            return;
        }
        if (pakkumine < this.sihtarv) {
            teade.textContent = "Liiga väike!";
        }
        else if (pakkumine > this.sihtarv) {
            teade.textContent = "Liiga suur!";
        }
        else {
            teade.textContent = "\u00D5ige! Arv oli ".concat(this.sihtarv, ".");
        }
        katsedEl.textContent = "Katsed: ".concat(this.katsed);
    };
    Mäng.prototype.reset = function () {
        this.sihtarv = this.genereeriArv();
        this.katsed = 0;
        document.getElementById("pakkumine").value = "";
        document.getElementById("teade").textContent = "";
        document.getElementById("katsed").textContent = "";
    };
    return Mäng;
}());
var mäng = new Mäng();
