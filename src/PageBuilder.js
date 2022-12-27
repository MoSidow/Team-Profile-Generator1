const fs = require('fs');

const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

const BuildHtmlPage = (managers, interns, engineers) => {

      let htmlContent = fs.readFileSync('./template/index.html', 'utf8');
      if (htmlContent) {
        let internHtml = '';
        interns.forEach(intern => {
            internHtml +=`<div class='cards'>
            <div class='card-title'>
            <h1>Interns</h1>
            </div>
                <p>ID: ${intern.id}</p>
                <p>Name: ${intern.name}</p>
                <p>Email: ${intern.email}</p>
                <p>School: ${intern.school}</p>
        </div>`
    });  
           
        let managerHtml = '';
        managers.forEach(manager => {
            managerHtml +=`<div class='cards'>
            <div class='card-title'>
            <h1>Managers</h1>
            </div>
                <p>ID: ${manager.id}</p>
                <p>Nmae: ${manager.name}</p>
                <p>Email: ${manager.email}</p>
                <p>Office Number: ${manager.officeNumber}</p>
        </div>` 
    });

        let engineerHtml = '';
        engineers.forEach(engineer => {
            engineerHtml +=`<div class='cards'>
            <div class='card-title'>
            <h1>Engineers</h1>
            </div>
                <p>ID: ${engineer.id}</p>
                <p>Name: ${engineer.name}</p>
                <p>Email: ${engineer.email}</p>
                <p>GitHub: <a href="https://github.com/${engineer.github}"></a></p>
        </div>`

        });

        htmlContent = htmlContent.replace('<!--MANAGERS-->', managerHtml)
        htmlContent = htmlContent.replace('<!--INTERN-->', internHtml)
        htmlContent = htmlContent.replace('<!--ENGINEERS-->', engineerHtml)

        fs.writeFileSync('./dist/mainTeamPage.html', htmlContent, 'utf8')

        console.log('Page Built')
      }
}

module.exports = BuildHtmlPage;