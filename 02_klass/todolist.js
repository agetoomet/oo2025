var Task = /** @class */ (function () {
    function Task(name) {
        this.name = name;
        this.completed = false;
    }
    Task.prototype.completeTask = function () {
        this.completed = true;
        console.log("Ülesanne: " + this.name + " on tehtud");
    };
    Task.prototype.getStatus = function () {
        return "\u00DClesanne: ".concat(this.name, " | Staatus: ").concat(this.completed ? "Tehtud" : "Tegemata");
    };
    return Task;
}());
// Testimine
var task1 = new Task("Tee TypeScript programm, kus kasutad klassi");
var task2 = new Task("Täienda veebilehte");
console.log(task1.getStatus());
console.log(task2.getStatus());
task1.completeTask();
console.log(task1.getStatus());
console.log(task2.getStatus());
