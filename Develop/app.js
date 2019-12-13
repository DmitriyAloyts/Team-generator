const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

class Team {
    constructor() {
        this.members = 0;
    }
    build() {
        this.nextMember();
    }
    nextMember() {
        this.promptNewMember().then(() => {
            this.askToAddAgain();
        });
    }
    promptNewMember() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Please enter name: ",
                    validate: function (val) {
                        // The users guess must be a number or letter
                        return /[a-z]/gi.test(val);
                    }
                }
            ])
            .then(val => {
                if (val.name) {
                    console.log(val.name);
                }

            });
    }
    askToAddAgain() {
        inquirer
            .prompt([
                {
                    type: "confirm",
                    name: "choice",
                    message: "Add new member Again?"
                }
            ])
            .then(val => {
                // If the user says yes to another game, play again, otherwise quit the game
                if (val.choice) {
                    this.nextMember();
                } else {
                    this.quit();
                }
            });
    }
    // Logs goodbye and exits the node app
    quit() {
        console.log("\nGoodbye!");
        process.exit(0);
    }
}
// Initialize a new Team object
const team = new Team();

// Start app
team.build();
