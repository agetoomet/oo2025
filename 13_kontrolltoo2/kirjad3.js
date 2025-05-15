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
var Kiri = /** @class */ (function () {
    function Kiri(pealkiri, sisu) {
        this.kirjad = [];
        this.pealkiri = pealkiri;
        this.sisu = sisu;
    }
    Kiri.prototype.lisaKiri = function (kiri) {
        this.kirjad.push(kiri);
    };
    Kiri.prototype.kirjuta = function () {
        return "".concat(this.pealkiri, ": ").concat(this.sisu);
    };
    return Kiri;
}());
var Veebiuudis = /** @class */ (function (_super) {
    __extends(Veebiuudis, _super);
    function Veebiuudis(pealkiri, sisu, URL) {
        var _this = _super.call(this, pealkiri, sisu) || this;
        _this.URL = URL;
        return _this;
    }
    Veebiuudis.prototype.kirjuta = function () {
        return "".concat(this.pealkiri, ": ").concat(this.sisu, " (").concat(this.URL, ")");
    };
    return Veebiuudis;
}(Kiri));
var kirjad = [];
var form = document.getElementById("kiri-form");
var list = document.getElementById("kirjad-list");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var pealkiri = document.getElementById("pealkiri").value;
    var sisu = document.getElementById("sisu").value;
    var url = document.getElementById("url").value;
    var kiri = url
        ? new Veebiuudis(pealkiri, sisu, url)
        : new Kiri(pealkiri, sisu);
    kirjad.push(kiri);
    var li = document.createElement("li");
    var pealkiriElement = document.createElement("h3");
    pealkiriElement.textContent = kiri.pealkiri;
    li.appendChild(pealkiriElement);
    var sisuElement = document.createElement("p");
    sisuElement.textContent = kiri.sisu;
    li.appendChild(sisuElement);
    if (kiri instanceof Veebiuudis) {
        var urlElement = document.createElement("a");
        urlElement.href = kiri.URL;
        urlElement.textContent = "Loe rohkem";
        sisuElement.appendChild(urlElement);
    }
    list.appendChild(li);
    form.reset();
});
