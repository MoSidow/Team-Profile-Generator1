const Employee = require('./Employee');

// Constructor file for Intern

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}
module.exports = Intern;