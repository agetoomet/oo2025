class Task {
    name: string;
    completed: boolean;

    constructor(name: string) {
        this.name = name;
        this.completed = false;
    }

    completeTask() {
        this.completed = true;
        console.log("Ülesanne: " + this.name + " on tehtud")
    }

    getStatus() {
        return `Ülesanne: ${this.name} | Staatus: ${this.completed ? "Tehtud" : "Tegemata"}`;
    }
}

// Testimine
const task1 = new Task("Tee TypeScript programm, kus kasutad klassi");
const task2 = new Task("Täienda veebilehte");

console.log(task1.getStatus());
console.log(task2.getStatus());
task1.completeTask(); 
console.log(task1.getStatus()); 
console.log(task2.getStatus());  