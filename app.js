const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMenuPrompt = {
    name: "addMember",
    message: "Select team member to add.",
    type: "list",
    choices: [
        "Engineer",
        "Intern",
        "FINISH",
    ],
};

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
];

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
];

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
];

function createMenuPrompt(addMember) {
    //console.log(addMember);
    if (addMember == "FINISH") {
        createTeam();
    } else {
        if (addMember == "Engineer") {
            createEngineer();
        } else if (addMember == "Intern") {
            createIntern();
        } else {
            console.log(`TODO ${addMember} `);
        }
    }
}

const teamMembers = [];

function start() {
    createManager();
}

function createTeam() {
    console.log(teamMembers);
    writeHTML(render(teamMembers));
}

function createManager() {
    inquirer.prompt(managerPrompt).then((answers) => {
        console.log(answers);
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        createMenuPrompt(answers.addMember);
    });
}
start();

function createEngineer() {
    inquirer.prompt(engineerPrompt).then((answers) => {
        console.log(answers);
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithubUsername);
        teamMembers.push(engineer);
        createMenuPrompt(answers.addMember);
    });
}

function createIntern() {
    inquirer.prompt(internPrompt).then((answers) => {
        console.log(answers);
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        createMenuPrompt(answers.addMember);
    });
}

const writeHTML = newHTML => {
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFile(outputPath, newHTML, function (err) {
        if (err) throw err;
        console.log('New Team Page Created!');
    });
}