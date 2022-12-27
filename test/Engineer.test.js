// Engineer Constructor Test
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('initialisation', () => {
        it('Test for Constructor', () => {
            const id = 1;
            const name = 'mohamed';
            const email = 'mohamed@test.com';
            const role = 'Engineer';
            const github = '@MoSidow';

            const objec = new Engineer(id, name, email, github);

            expect(objec.id).toEqual(id);
            expect(objec.name).toEqual(name);
            expect(objec.email).toEqual(email);
            expect(objec.github).toEqual(github);

            expect(objec.getId()).toEqual(id);
            expect(objec.getName()).toEqual(name);
            expect(objec.getEmail()).toEqual(email);
            expect(objec.getRole()).toEqual(role);
            expect(objec.getGitHub()).toEqual(github);
        })
    })
})