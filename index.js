//added the inquirer module
const inquirer = require('inquirer');
//add the fs module
const fs=require('fs');
//add the employee class
const employee = require('./lib/Employee');
//add the manager class
const manager = require('./lib/Manager');
//add the intern class
const intern = require('./lib/Intern');
//add the manager class
const engineer = require('./lib/Engineer');
//get the html 
const details=require('./src/details');
//function create the prompt to ask user questions
function CreateQuestions()
{
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: `Enter the team member's name?`
        },
        {
            name: 'id',
            type: 'input',
            message: `Enter the team member's ID?`
        },
        {
            name: 'email',
            type: 'input',
            message: `Enter the team member's email address?`
        },
        {
            name: 'role',
            type: 'list',
            message: `What is the team member role?`,
            choices: ['Manager','Engineer', 'Intern']

        }
    ]).then(answers => {
        if (answers.role == "Engineer") {
            //call the function to prompt engineer details
            addEngineer(answers);
        }
        else if (answers.role == "Intern") {
            //call the function to prompt intern details
            addIntern(answers);
        }
        else if (answers.role == "Manager") {
            //call the function to prompt intern details
            addManager(answers);
        }
        //function ask the user if wants to add more people or we want to quit
       // addMore();
    });
}
//function ask user wants to add more people
function addMore()
{
        inquirer.prompt([
            {
                name: 'addMore',
                type: 'list',
                message: `Do you want to add more team members?`,
                choices: ['Yes','No']
    
            }
        ]).then(answers=>{
            if(answers.addMore=='Yes')
            {
                   //function to ask if wants to add more people
                CreateQuestions();
            }
            else
            {
                console.log('exit');
            }
        });
}
//function to ask about engineer detials
function addEngineer(data) {
    inquirer.prompt([
        {
            name: 'githubUserName',
            type: 'input',
            message: `Enter the GitHub User name?`
        }
    ]).then(answers => {
        //function to ask if wants to add more people
        const engineerDetail=new engineer(data.id,data.name,data.email,answers.githubUserName);
        //adding the data to the file
        const read=details(engineerDetail);
        console.log(read);
        fs.writeFileSync('./dist/index.html',read,(err)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("suceesfully appended in to the file")
            }
        })
        console.log(engineerDetail);
      addMore();
    });
}
//function to ask about inter detials
function addIntern(answers) {
    inquirer.prompt([
        {
            name: 'school',
            type: 'input',
            message: `Enter the school name?`
        }
    ]).then(answers => {
        //function to ask if wants to add more people
        addMore();
    });
}
//function to ask about manager detials
function addManager(answers) {
    inquirer.prompt([
        {
            name: 'officeNumber',
            type: 'input',
            message: `Enter the office number?`
        }
    ]).then(answers => {
        //function to ask if wants to add more people
        addMore();
    });
}
CreateQuestions();