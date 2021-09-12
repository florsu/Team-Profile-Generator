const Employee = require("./Employee")

class Manager extends Employee {
    constructor(id, name, email, office_number) {
        super(id, name, email)
        this.officeNumber = office_number
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager"
    }
}
module.exports = Manager
