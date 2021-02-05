const Employee=require('../lib/Employee');
//Employee test cases
describe('Employee test',()=>{
    //get an employee id
    it('create employee id',()=>{
        const emp=new Employee(100);
        expect(100).toBe(emp.id);
    });
     //create an employee name
     it('create employee name',()=>{
        const emp=new Employee(100,'Rubi');
        expect('Rubi').toBe(emp.name);
    });
    //create an employee email
    it('create employee email',()=>{
        const emp=new Employee(100,'Rubi','rubi@gmail.com');
        expect('rubi@gmail.com').toBe(emp.email);
    });
     //get the name
     it('get the name of the employee',()=>{
        const emp=new Employee(100,'Rubi','rubi@gmail.com');
        expect('Rubi').toBe(emp.getName());
    });
     //get the id
     it('get the id of the employee',()=>{
        const emp=new Employee(100,'Rubi','rubi@gmail.com');
        expect(100).toBe(emp.getId());
    });
     //get the email
     it('get the email of the employee',()=>{
        const emp=new Employee(100,'Rubi','rubi@gmail.com');
        expect('rubi@gmail.com').toBe(emp.getEmail());
    });
    //get the role
    it('get the role of the employee',()=>{
        const emp=new Employee(100,'Rubi','rubi@gmail.com');
       expect('Employee').toBe(emp.getRole());
   });
});