namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number,
    }

    export class React extends Subjects.Subject {
        getRequirements(){
            return "Here is the list of requirements for React";
        };

        getAvailableTeacher(){ 
            return this.teacher && this.teacher.experienceTeachingReact?`Available Teacher: ${this.teacher.firstName}`: "No available teacher"
        }
    }
}