"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veebiuudis = exports.Kiri = void 0;
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
exports.Kiri = Kiri;
var Veebiuudis = /** @class */ (function (_super) {
    __extends(Veebiuudis, _super);
    function Veebiuudis(pealkiri, sisu, URL) {
        var _this = _super.call(this, pealkiri, sisu) || this;
        _this.URL = URL;
        return _this;
    }
    Veebiuudis.prototype.kirjuta = function () {
        return "".concat(this.pealkiri, ": ").concat(this.sisu, " (Loe rohkem: ").concat(this.URL, ")");
    };
    return Veebiuudis;
}(Kiri));
exports.Veebiuudis = Veebiuudis;
