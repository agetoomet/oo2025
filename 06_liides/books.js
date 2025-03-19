var slowSpeed = /** @class */ (function () {
    function slowSpeed() {
    }
    slowSpeed.prototype.calculate = function (wordCount, wpm) {
        if (wpm === void 0) { wpm = 150; }
        return wordCount / wpm;
    };
    slowSpeed.prototype.inputUnit = function () {
        return "words";
    };
    slowSpeed.prototype.outputUnit = function () {
        return "min";
    };
    return slowSpeed;
}());
var averageSpeed = /** @class */ (function () {
    function averageSpeed() {
    }
    averageSpeed.prototype.calculate = function (wordCount, wpm) {
        if (wpm === void 0) { wpm = 250; }
        return wordCount / wpm;
    };
    averageSpeed.prototype.inputUnit = function () {
        return "words";
    };
    averageSpeed.prototype.outputUnit = function () {
        return "min";
    };
    return averageSpeed;
}());
var fastSpeed = /** @class */ (function () {
    function fastSpeed() {
    }
    fastSpeed.prototype.calculate = function (wordCount, wpm) {
        if (wpm === void 0) { wpm = 400; }
        return wordCount / wpm;
    };
    fastSpeed.prototype.inputUnit = function () {
        return "words";
    };
    fastSpeed.prototype.outputUnit = function () {
        return "min";
    };
    return fastSpeed;
}());
