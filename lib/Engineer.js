//Extends the employee class
const Employee = require('./Employee');
//engineer class
class Engineer extends Employee {
    //Constructor
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }
    //function returns the role of the engineer
    getRole() {
        return 'Engineer';
    }
    //function return the github profile of the engineer
    getGithub() {
        return this.github;
    }
    
}

module.exports=Engineer;