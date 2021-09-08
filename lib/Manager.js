const Employee = require("./Employee")
//import Employee from 'Employee.js'
class Manager extends Employee {
    constructor(id, name, email,office_number) {
        super(id, name, email)
        this.office_number=office_number
    }

    getRole() {
        return "Manager"
    }
}
module.exports=Manager
