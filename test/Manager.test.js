// Manager Constructor Test
const Manager= require('../lib/Manager');

describe('Manager', () => {
    describe('initialisation', () => {
        it('Test for Constructor', () => {
            const id = 1;
            const name = 'mohamed';
            const email = 'mohamed@test.com';
            const role = 'Manager';
            const officeNumber = '0123456789';

            const objec = new Manager(id, name, email, officeNumber);

            expect(objec.id).toEqual(id);
            expect(objec.name).toEqual(name);
            expect(objec.email).toEqual(email);
            expect(objec.officeNumber).toEqual(officeNumber);

            expect(objec.getId()).toEqual(id);
            expect(objec.getName()).toEqual(name);
            expect(objec.getEmail()).toEqual(email);
            expect(objec.getRole()).toEqual(role);
            expect(objec.getOfficeNumber()).toEqual(officeNumber);
        })
    })
})