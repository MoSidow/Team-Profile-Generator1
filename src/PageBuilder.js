// Preview of html file generated
const fs = require('fs');

const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

const BuildHtmlPage = (managers, interns, engineers) => {

      let htmlContent = fs.readFileSync('./template/index.html', 'utf8');
      if (htmlContent) {
        let internHtml = '';
        interns.forEach(intern => {
            // Html for intern
            internHtml +=`<div class='team-cards'>
            <div class='card-title'>
            <h1>Interns</h1>
            </div>
                <p>ID: ${intern.id}</p>
                <p>Name: ${intern.name}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
        </div>`
    });  
           
        let managerHtml = '';
        managers.forEach(manager => {
            // Html for manager
            managerHtml +=`<div class='team-cards'>
            <div class='card-title'>
            <h1>Managers</h1>
            </div>
                <p>ID: ${manager.id}</p>
                <p>Name: ${manager.name}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
        </div>` 
    });

        let engineerHtml = '';
        engineers.forEach(engineer => {
            // Html for engineer
            engineerHtml +=`<div class='team-cards'>
            <div class='card-title'>
            <h1>Engineers</h1>
            </div>
                <p>ID: ${engineer.id}</p>
                <p>Name: ${engineer.name}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>`

        });
        // Replace placeholders with user input
        htmlContent = htmlContent.replace('<!--MANAGERS-->', managerHtml)
        htmlContent = htmlContent.replace('<!--INTERN-->', internHtml)
        htmlContent = htmlContent.replace('<!--ENGINEERS-->', engineerHtml)

        // Write to html file
        fs.writeFileSync('./dist/mainTeamPage.html', htmlContent, 'utf8')

        console.log('Page Built')
      }
}

module.exports = BuildHtmlPage;