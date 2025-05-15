var Water = /** @class */ (function () {
    function Water(waterAmount, temperature) {
        this.heatingPower = 0;
        this.specialHeatCapacity = 4200;
        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }
    Water.prototype.setHeatingPower = function (newPower) {
        this.heatingPower = newPower;
    };
    Water.prototype.getTemperature = function () {
        return this.temperature;
    };
    Water.prototype.heatAsecond = function () {
        var joules = this.temperature;
        var deltaTemperature = joules / (this.specialHeatCapacity * this.waterAmount / 1000);
        this.temperature += deltaTemperature;
    };
    return Water;
}());
var w = new Water(800, 20);
w.setHeatingPower(1500);
//stimulate the power for 120 seconds
for (var i = 0; i < 120; i++) {
    w.heatAsecond();
}
console.log("final temperature after 120 seconds ".concat(w.getTemperature()));
