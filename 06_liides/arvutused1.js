var InchestoCM = /** @class */ (function () {
    function InchestoCM() {
    }
    InchestoCM.prototype.calculate = function (inches) {
        return inches * 2.54;
    };
    InchestoCM.prototype.inputUnit = function () {
        return "in";
    };
    InchestoCM.prototype.outputUnit = function () {
        return "cm";
    };
    return InchestoCM;
}());
var CmToInches = /** @class */ (function () {
    function CmToInches() {
    }
    CmToInches.prototype.calculate = function (cm) {
        return cm / 2.54;
    };
    CmToInches.prototype.inputUnit = function () {
        return "cm";
    };
    CmToInches.prototype.outputUnit = function () {
        return "in";
    };
    return CmToInches;
}());
