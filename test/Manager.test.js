const Manager=require('../lib/Manager.js');
//Employee test cases
describe('Manager test',()=>{
    //get an employee id
    it('create manager id',()=>{
        const mng=new Manager(100);
        expect(100).toBe(mng.id);
    });
     //create an employee name
     it('create manager name',()=>{
        const mng=new Manager(100,'Rubi');
        expect('Rubi').toBe(mng.name);
    });
    //create an employee email
    it('create manager email',()=>{
        const mng=new Manager(100,'Rubi','rubi@gmail.com');
        expect('rubi@gmail.com').toBe(mng.email);
    });
     //get the name
     it('get the name of the manager',()=>{
        const mng=new Manager(100,'Rubi','rubi@gmail.com');
        expect('Rubi').toBe(mng.getName());
    });
     //get the id
     it('get the id of the manager',()=>{
        const mng=new Manager(100,'Rubi','rubi@gmail.com');
        expect(100).toBe(mng.getId());
    });
     //get the email
     it('get the email of the manager',()=>{
        const mng=new Manager(100,'Rubi','rubi@gmail.com');
        expect('rubi@gmail.com').toBe(mng.getEmail());
    });
    //get the role
    it('get the role of the manager',()=>{
        const mng=new Manager(100,'Rubi','rubi@gmail.com');
       expect('Manager').toBe(mng.getRole());
   });
   //get the phonenumber
   it('get the office phone name of the manager',()=>{
    const mng=new Manager(100,'Rubi','rubi@gmail.com',9988772345);
   expect(9988772345).toBe(mng.getNumber());
});
});