class Task {
    name: string;
    completed: boolean;

    constructor(name: string) {
        this.name = name;
        this.completed = false;
    }

    completeTask() {
        this.completed = true;
    }

    getStatus() {
        return `Task: ${this.name} | Status: ${this.completed ? "Tehtud" : "Tegemata"}`;
    }
}

class TaskList {
    tasks: Task[] = [];

    addTask(taskName: string): void {
        this.tasks.push(new Task(taskName));
    }

    showTasks(): void {
        this.tasks.forEach(task => console.log(task.getStatus()));
    }

    completeTask(index: number): void {
        if (this.tasks[index]) {
            this.tasks[index].completeTask();
        } else {
            console.log("Sellist ülesannet ei leidnud.");
        }
    }
}

// Testimine
const myTasks = new TaskList();
myTasks.addTask("Tee TypeScript programm, kus kasutad klassi");
myTasks.addTask("Täienda veebilehte");

myTasks.showTasks(); 
myTasks.completeTask(0);
myTasks.showTasks();  