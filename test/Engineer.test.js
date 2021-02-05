const Engineer=require('../lib/Engineer.js');
//Employee test cases
describe('Engineer test',()=>{
    //get an employee id
    it('create engineer id',()=>{
        const eng=new Engineer(100);
        expect(100).toBe(eng.id);
    });
     //create an employee name
     it('create engineer name',()=>{
        const eng=new Engineer(100,'Rubi');
        expect('Rubi').toBe(eng.name);
    });
    //create an employee email
    it('create engineer email',()=>{
        const eng=new Engineer(100,'Rubi','rubi@gmail.com');
        expect('rubi@gmail.com').toBe(eng.email);
    });
     //get the name
     it('get the name of the engineer',()=>{
        const eng=new Engineer(100,'Rubi','rubi@gmail.com');
        expect('Rubi').toBe(eng.getName());
    });
     //get the id
     it('get the id of the engineer',()=>{
        const eng=new Engineer(100,'Rubi','rubi@gmail.com');
        expect(100).toBe(eng.getId());
    });
     //get the email
     it('get the email of the engineer',()=>{
        const eng=new Engineer(100,'Rubi','rubi@gmail.com');
        expect('rubi@gmail.com').toBe(eng.getEmail());
    });
    //get the role
    it('get the role of the engineer',()=>{
        const eng=new Engineer(100,'Rubi','rubi@gmail.com');
       expect('Engineer').toBe(eng.getRole());
   });
   //get the role
   it('get the github profile name of the engineer',()=>{
    const eng=new Engineer(100,'Rubi','rubi@gmail.com','rubicap');
   expect('rubicap').toBe(eng.getGithub());
});
});