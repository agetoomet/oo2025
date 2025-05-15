import { Teacher } from "../hinded";

describe("Teacher", () => {
  it("lisab õpilase", () => {
    const teacher = new Teacher();
    teacher.addStudent("Mari");
    expect(() => teacher.addStudent("Mari")).toThrow("Student already exists");
  });

  it("lisab hinded ja arvutab keskmise", () => {
    const teacher = new Teacher();
    teacher.addStudent("Juku");
    teacher.addGrade("Juku", 4);
    teacher.addGrade("Juku", 5);
    expect(teacher.getAverage("Juku")).toBe(4.5);
  });

  it("tagastab 0 kui hindepanus on tühi", () => {
    const teacher = new Teacher();
    teacher.addStudent("Kati");
    expect(teacher.getAverage("Kati")).toBe(0);
  });

  it("annab veateate kui õpilast pole", () => {
    const teacher = new Teacher();
    expect(() => teacher.addGrade("Puuduv", 5)).toThrow("Student not found");
  });
})