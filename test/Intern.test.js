// Intern Constructor Test
const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('initialisation', () => {
        it('Test for Constructor', () => {
            const id = 1;
            const name = 'mohamed';
            const email = 'mohamed@test.com';
            const role = 'Intern';
            const school = 'schoolName';

            const objec = new Intern(id, name, email, school);

            expect(objec.id).toEqual(id);
            expect(objec.name).toEqual(name);
            expect(objec.email).toEqual(email);
            expect(objec.school).toEqual(school);

            expect(objec.getId()).toEqual(id);
            expect(objec.getName()).toEqual(name);
            expect(objec.getEmail()).toEqual(email);
            expect(objec.getRole()).toEqual(role);
            expect(objec.getSchool()).toEqual(school);
        })
    })
})