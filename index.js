//added the inquirer module
const inquirer = require('inquirer');
//add the employee class
const employee = require('./lib/Employee');
//add the manager class
const manager = require('./lib/Manager');
//add the intern class
const intern = require('./lib/Intern');
//add the manager class
const engineer = require('./lib/Engineer');
//function create the prompt to ask user questions
function CreateQuestions()
{
    inquirer.prompt([
        {
            name: 'teamManager',
            type: 'input',
            message: `Enter the Team Manager name?`
        },
        {
            name: 'employeeId',
            type: 'input',
            message: `Enter the Employee ID?`
        },
        {
            name: 'email',
            type: 'input',
            message: `Enter the email address?`
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: `Enter the office number?`
        }

    ]).then(answers => {
        //function ask the user if wants to add more people or we want to quit
        addMore();
    });
}
//function ask user wants to add more people
function addMore()
{
    inquirer.prompt([
        {
            name: 'addMore',
            type: 'list',
            message: `What do you want to do?`,
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team']

        }
    ]).then(answers => {
        //check what user has selected
        if (answers.addMore == "Add an engineer") {
            //call the function to prompt engineer details
            addEngineer();
        }
        else if (answers.addMore == "Add an intern") {
            //call the function to prompt intern details
            addIntern();
        }
        else {
            console.log('exit');
        }
    });
}
//function to ask about engineer detials
function addEngineer() {
    inquirer.prompt([
        {
            name: 'engineerName',
            type: 'input',
            message: `Enter the Engineer name?`
        },
        {
            name: 'engineerId',
            type: 'input',
            message: `Enter the Engineer ID?`
        },
        {
            name: 'email',
            type: 'input',
            message: `Enter the email address?`
        },
        {
            name: 'githubUserName',
            type: 'input',
            message: `Enter the GitHub User name?`
        }
    ]).then(answers => {
        //function to ask if wants to add more people
        addMore();
    });
}
//function to ask about inter detials
function addIntern() {
    inquirer.prompt([
        {
            name: 'internName',
            type: 'input',
            message: `Enter the Intern name?`
        },
        {
            name: 'internId',
            type: 'input',
            message: `Enter the Intern ID?`
        },
        {
            name: 'email',
            type: 'input',
            message: `Enter the email address?`
        },
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
CreateQuestions();