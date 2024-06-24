namespace Subjects{
    export interface Teacher {
        experienceTeachingC?: number,
    }

    export class Cpp extends Subjects.Subject {
        getRequirements() {
            return "Here is the list of requirements for Cpp";
        };
    
        getAvailableTeacher(){
            return this.teacher && this.teacher.experienceTeachingC? `Available Teacher: ${this.teacher}`: "No available teacher"
        }
    }
}

