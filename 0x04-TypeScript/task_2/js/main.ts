interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeachersTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home"
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }

    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }

    getCoffeeBreak(): string {
        return "Cannot have a break"
    }

    workTeachersTasks(): string {
        return "Getting to work"
    }
}

interface EmployeeInterface {
    (salary: Number | string): DirectorInterface | TeacherInterface;
}

const createEmployee: EmployeeInterface = (salary) => {
   const num = Number(salary);
   if (num < 500){
    return new Teacher;
   }
   else {
    return new Director;
   }
}

interface isDirectorInterface {
    (employee: TeacherInterface | DirectorInterface): employee is Director;
}

const isDirector: isDirectorInterface = (employee): employee is Director => {
    return (employee as Director).workDirectorTasks !== undefined;
}

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects): string => {
    if (todayClass === "Math") {
        return "Teaching Math"
    }
    return "Teaching History"
}

console.log(teachClass('Math'));

console.log(teachClass('History'));

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));