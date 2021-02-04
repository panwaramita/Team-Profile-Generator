//Extends the employee class
const Employee = require('./Employee');
//intern class
class Intern extends Employee {
    //Constructor
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }
    //function returns the role of the intern
    getRole() {
        return 'Intern';
    }
    //function returns the school name
    getSchool() {
        return this.school;
    }
}

module.exports=Intern;