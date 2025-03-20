"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
var calculator = /** @class */ (function () {
    function calculator() {
        this.panelContent = "";
    }
    calculator.prototype.pressButton = function (b) {
        this.panelContent += b;
    };
    calculator.prototype.getPanelContents = function () {
        return this.panelContent; //return the full number as string
    };
    return calculator;
}());
exports.calculator = calculator;
