// Constructor file for Employee
class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;