// Employee Constructor Test
const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('initialisation', () => {
        it('Test for Constructor', () => {
            const id = 1;
            const name = 'mohamed';
            const email = 'mohamed@test.com';
            const role = 'Employee';

            const objec = new Employee(id, name, email);

            expect(objec.id).toEqual(id);
            expect(objec.name).toEqual(name);
            expect(objec.email).toEqual(email);

            expect(objec.getId()).toEqual(id);
            expect(objec.getName()).toEqual(name);
            expect(objec.getEmail()).toEqual(email);
            expect(objec.getRole()).toEqual(role);
        })
    })
})