const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
//const { start } = require("repl");
const teamMenuPrompt = {
    name: "addMember",
    message: "Select team member to add.",
    type: "list",
    choices: [
        "Engineer",
        "Intern",
        "FINISH",
    ],
}

const managerPrompt = [
    {
        type: "input",
        name: "managerName",
        message: "What is manager's name?",
    },
    {
        type: "input",
        name: "managerID",
        message: "What is manager's ID?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is manager's email?",
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is manager's office number?",
    },
    teamMenuPrompt,
]

const engineerPrompt = [
    {
        type: "input",
        name: "engineerName",
        message: "What is engineer's name?",
    },
    {
        type: "input",
        name: "engineerID",
        message: "What is engineer's ID?",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is engineer's email?",
    },
    {
        type: "input",
        name: "engineerGithubUsername",
        message: "What is engineer's Github username?",
    },
    teamMenuPrompt,
]

const internPrompt = [
    {
        type: "input",
        name: "internName",
        message: "What is intern's name?",
    },
    {
        type: "input",
        name: "internID",
        message: "What is intern's ID?",
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is intern's email?",
    },
    {
        type: "input",
        name: "internSchool",
        message: "What is intern's school?",
    },
    teamMenuPrompt,
]

function createMenuPrompt(addMember) {
    console.log(addMember)
    if (addMember == "FINISH") {
        createTeam()
    } else {
        if (addMember == "Engineer") {
            createEngineer()
        } else if (addMember == "Intern") {
            createIntern()
        } else {
            console.log(`TODO ${addMember} `)
        }
    }
}

const teamMembers = [];

function start() {
    createManager()
}

function createTeam() {
    console.log(teamMembers)
}

function createManager() {
    inquirer.prompt(managerPrompt).then((answers) => {
        console.log(answers)
        const manager = new Manager(answers.managerID, answers.managerName, answers.managerEmail, answers.managerOfficeNumber)
        teamMembers.push(manager)
        createMenuPrompt(answers.addMember)
    })
}
start()

function createEngineer() {
    inquirer.prompt(engineerPrompt).then((answers) => {
        console.log(answers)
        const engineer = new Engineer(answers.engineerID, answers.engineerName, answers.engineerEmail, answers.engineerGithubUsername)
        teamMembers.push(engineer)
        createMenuPrompt(answers.addMember)
    })
}

function createIntern() {
    inquirer.prompt(internPrompt).then((answers) => {
        console.log(answers)
        const intern = new Intern(answers.internID, answers.internName, answers.internEmail, answers.internSchool)
        teamMembers.push(intern)
        createMenuPrompt(answers.addMember)
    })
}


//type list of options to call for team members



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
