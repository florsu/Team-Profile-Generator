const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(id, name, email, github_username) {
        super(id, name, email)
        this.github = github_username
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
}
module.exports = Engineer