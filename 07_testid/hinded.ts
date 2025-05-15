interface Student{
    name: string;
    grades: number[];
}

interface TeacherInterface{
    addStudent(name: string): void;
    addGrade(name: string, grade: number): void;
    getAverage(name: string): number;
}

export class Teacher implements TeacherInterface{
    private students: Student[] = [];

    addStudent(name: string): void{
    if (this.students.find(s => s.name === name)) {
      throw new Error("Student already exists");
    }
    this.students.push({ name, grades: [] });
    }

    addGrade(name: string, grade: number): void {
    const student = this.students.find(s => s.name === name);
    if (!student) throw new Error("Student not found");
    student.grades.push(grade);
    }

    getAverage(name: string): number {
    const student = this.students.find(s => s.name === name);
    if (!student) throw new Error("Student not found");
    if (student.grades.length === 0) return 0;
    return student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
    }
}

const manager = new Teacher();
manager.addStudent("Mati");
manager.addGrade("Mati", 4);
manager.addGrade("Mati", 5);
console.log("Mati keskmine hinne:", manager.getAverage("Mati"));