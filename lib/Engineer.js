// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
//import Employee from 'Employee.js'
class Engineer extends Employee {
    constructor(id, name, email, github_username) {
        super(id, name, email)
        this.github_username = github_username
    }

    getRole() {
        return "Engineer"
    }
}
module.exports = Engineer