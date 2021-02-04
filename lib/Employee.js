const { Module } = require("module");

//employee elass
class Employee {
    //constructor for employee class
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    //return the name 
    getName() {
        return this.name;
    }
    //return the id
    getId() {
        return this.id;
    }
    //return email
    getEmail() {
        return this.email;
    }
    //function to return the employee role
    getRole() {
        return 'Employee';
    }

}
module.exports=Employee;