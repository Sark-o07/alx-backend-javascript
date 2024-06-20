interface Teachers {
    readonly firstname: string,
    readonly lastname: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any
}

interface Directors extends Teachers {
    numberOfreports: number,
};


interface printTeachersFunction {
    (firstname: string, lastname: string): string;
}

const printTeachers: printTeachersFunction = (firstname, lastname) => { return `${firstname.charAt(0)}.${lastname}`};


interface classInterface1 {
    workOnHomework(): string;
    displayName(): string;
}


class StudentClasses implements classInterface1 {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName
    }
}

interface StudentConstructor1 {
    (firstName: string, lastName: string): classInterface1;
}

const studentCreator: StudentConstructor1 = (firstName, lastName) => {
    return new StudentClasses(firstName, lastName);
}

const student1 = studentCreator("Azeez", "Montana");
console.log(student1.displayName());
console.log(student1.workOnHomework());
