This is a software engineering team generator command line application. The application prompts the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This app must also pass all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. 

App uses the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

App will run as a Node CLI to gather information about each employee.

App has a directory structure that looks like this:

```
lib/           // classes and helper code
output/        // rendered output
templates/     // HTML template(s)
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application

App has multiple HTML templates for each type of user:

  * `main.html`

  * `engineer.html`
  
  * `intern.html`
  
  * `manager.html`

App has these classes: `Employee`, `Manager`, `Engineer`,`Intern`. The tests for these classes in the `tests` directory must all pass.
