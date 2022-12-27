// Array of questions for users

const mainQuestions = [
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: ['Add a Manager', 'Add an Intern', 'Add an Engineer', 'Build the team'],
    },
]

const managerQuestions = [
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee id?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?',
    },


    {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?',
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the managers office number?',
    }

]

const engineerQuestions = [
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee id?',
    },

    {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?',
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is the employee github username?',
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee id?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?',
    },


    {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?',
    },


    {
        type: 'input',
        name: 'school',
        message: 'What is the school name?',
    },
]

module.exports = {mainQuestions, managerQuestions, engineerQuestions, internQuestions};