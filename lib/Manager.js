//Extends the employee class
const Employee = require('./Employee');
//manager class
class Manager extends Employee {
    //Constructor
    constructor(id, name, email, officenumber) {
        super(id, name, email);
        this.officenumber = officenumber;
    }
    //function to return the number
    getNumber()
    {
        return this.officenumber;
    }
    //function returns the role of the manager
    getRole() {
        return 'Manager';
    }
}

module.exports=Manager;