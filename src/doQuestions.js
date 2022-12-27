const inquirer = require('inquirer');

const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const managers = [];
const interns = [];
const engineers = [];

const Questions = require('./questions')
const BuildHtmlPage = require('./PageBuilder');


const DisplayManagerQuestions = () => {
    inquirer
    .prompt(Questions.managerQuestions)
    .then((response) => {

        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);

        managers.push(manager);

        displayMainQuestions();
    })
}

const DisplayInternQuestions = () => {
    inquirer
    .prompt(Questions.internQuestions)
    .then((response) => {

        const intern = new Intern(response.name, response.id, response.email, response.school);

        interns.push(intern);

        displayMainQuestions();
    })
}

const DisplayEngineerQuestions = () => {
    inquirer
    .prompt(Questions.engineerQuestions)
    .then((response) => {

        const engineer = new Engineer(response.name, response.id, response.email, response.github);

        engineers.push(engineer);

        displayMainQuestions();
    })
}

const displayMainQuestions = () => {
    inquirer
    .prompt(Questions.mainQuestions)
    .then((response) =>{
        switch (response.options) {
            case 'Add a Manager':
            
            DisplayManagerQuestions()
            break;

            case 'Add an Intern':
            
            DisplayInternQuestions()
            break;

            case 'Add an Engineer':
            
            DisplayEngineerQuestions()
            break;

            case 'Build the team':
                console.log('Build The Page!')
                BuildHtmlPage(managers, interns, engineers);    
                break;

            default:
                console.log('default')
                break;
        }
    }
    )
}

module.exports = displayMainQuestions;


