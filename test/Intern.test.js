const Intern=require('../lib/Intern.js');
//Employee test cases
describe('Intern test',()=>{
    //get an employee id
    it('create intern id',()=>{
        const int=new Intern(100);
        expect(100).toBe(int.id);
    });
     //create an employee name
     it('create intern name',()=>{
        const int=new Intern(100,'Rubi');
        expect('Rubi').toBe(int.name);
    });
    //create an employee email
    it('create intern email',()=>{
        const int=new Intern(100,'Rubi','rubi@gmail.com');
        expect('rubi@gmail.com').toBe(int.email);
    });
     //get the name
     it('get the name of the intern',()=>{
        const int=new Intern(100,'Rubi','rubi@gmail.com');
        expect('Rubi').toBe(int.getName());
    });
     //get the id
     it('get the id of the intern',()=>{
        const int=new Intern(100,'Rubi','rubi@gmail.com');
        expect(100).toBe(int.getId());
    });
     //get the email
     it('get the email of the intern',()=>{
        const int=new Intern(100,'Rubi','rubi@gmail.com');
        expect('rubi@gmail.com').toBe(int.getEmail());
    });
    //get the role
    it('get the role of the intern',()=>{
        const int=new Intern(100,'Rubi','rubi@gmail.com');
       expect('Intern').toBe(int.getRole());
   });
   //get the school name
   it('get the school name of the intern',()=>{
    const int=new Intern(100,'Rubi','rubi@gmail.com','mySchool');
   expect('mySchool').toBe(int.getSchool());
});
});