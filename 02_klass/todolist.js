var Task = /** @class */ (function () {
    function Task(name) {
        this.name = name;
        this.completed = false;
    }
    Task.prototype.completeTask = function () {
        this.completed = true;
    };
    Task.prototype.getStatus = function () {
        return "Task: ".concat(this.name, " | Status: ").concat(this.completed ? "Tehtud" : "Tegemata");
    };
    return Task;
}());
var TaskList = /** @class */ (function () {
    function TaskList() {
        this.tasks = [];
    }
    TaskList.prototype.addTask = function (taskName) {
        this.tasks.push(new Task(taskName));
    };
    TaskList.prototype.showTasks = function () {
        this.tasks.forEach(function (task) { return console.log(task.getStatus()); });
    };
    TaskList.prototype.completeTask = function (index) {
        if (this.tasks[index]) {
            this.tasks[index].completeTask();
        }
        else {
            console.log("Sellist ülesannet ei leidnud.");
        }
    };
    return TaskList;
}());
// Testimine
var myTasks = new TaskList();
myTasks.addTask("Tee TypeScript programm, kus kasutad klassi");
myTasks.addTask("Täienda veebilehte");
myTasks.showTasks();
myTasks.completeTask(0);
myTasks.showTasks();
