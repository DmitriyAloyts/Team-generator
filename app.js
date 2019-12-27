const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const render = require("./lib/htmlRenderer");

const outputPath = path.resolve(__dirname, "output", "team.html");
const listOfEmployees = [];

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email?"
        },
        {
            type: "list",
            name: "role",
            message: "What is your role?",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the Office Number?',
            when: (answers) => answers.role === 'Manager'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Github Username?',
            when: (answers) => answers.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the School?',
            when: (answers) => answers.role === 'Intern'
        },
        {
            type: "confirm",
            name: "choice",
            message: "Add new member Again?"
        }
    ]).then(answers => {
        switch (answers.role) {
            case 'Manager':
                var manager = new Manager(answers.name, answers.email, answers.office)
                listOfEmployees.push(manager);
                break;
            case 'Engineer':
                var engineer = new Engineer(answers.name, answers.email, answers.github)
                listOfEmployees.push(engineer);
                break;
            case 'Intern':
                var intern = new Intern(answers.name, answers.email, answers.school)
                listOfEmployees.push(intern);
                break;
        }
        if (!answers.choice) {
            // console.log(listOfEmployees);
            fs.writeFileSync(outputPath, render(listOfEmployees), "utf-8");
        } else {
            promptUser();
        }
    })
}
promptUser();
