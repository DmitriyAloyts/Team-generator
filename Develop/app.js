const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const fs = require("fs");
const util = require("util");
const generateHTML = require("./generateHTML");
const mappendHTML = require("./mappendHTML");
const eappendHTML = require("./eappendHTML");
const iappendHTML = require("./iappendHTML");
const endappendHTML = require("./endappendHTML");


const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

const listOfEmployees = [];
let answers = {};

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
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
            message: 'What is your Office Number?',
            when: (answers) => answers.role === 'Manager'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github Username?',
            when: (answers) => answers.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your School?',
            when: (answers) => answers.role === 'Intern'
        },
        {
            type: "confirm",
            name: "choice",
            message: "Add new member Again?"
        }
    ])
}
async function init() {
    console.log("Welcome to team builder!")
    try {
        const html = generateHTML();
        await writeFileAsync("./output/team.html", html);

        let addNewMember = true;
        while (addNewMember === true) {
            answers = await promptUser();
            switch (answers.role) {
                case 'Manager':
                    var manager = new Manager(answers.name, answers.email, answers.office)
                    listOfEmployees.push(manager);
                    let mappendhtml = mappendHTML(manager);
                    await appendFileAsync("./output/team.html", mappendhtml);
                    break;
                case 'Engineer':
                    var engineer = new Engineer(answers.name, answers.email, answers.github)
                    // console.log(engineer);
                    listOfEmployees.push(engineer);
                    let eappendhtml = eappendHTML(engineer);
                    await appendFileAsync("./output/team.html", eappendhtml);
                    break;
                case 'Intern':
                    var intern = new Intern(answers.name, answers.email, answers.school)
                    // console.log(intern);
                    listOfEmployees.push(intern);
                    let iappendhtml = iappendHTML(intern);
                    await appendFileAsync("./output/team.html", iappendhtml);
                    break;
            }            
            if (!answers.choice) {
                let endappendhtml = endappendHTML();
                await appendFileAsync("./output/team.html", endappendhtml);
                addNewMember = false;
            }
        }
        console.log(listOfEmployees);
        console.log("Successfully wrote to ./output/team.html");
    } catch (err) {
        console.log(err);
    }
}

init();
