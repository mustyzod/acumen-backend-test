const registrationService = require('../RegistrationService');

describe('Registration Service', () => {
    beforeEach(async () => {
        // Clear all instances and calls to constructor and all methods:
        RegistrationService = new registrationService();
    });

    it('should login user', async () => {
        const email = "mustyzod@gmail.com";
        const password = "sodruldeen";
        const recieved = await RegistrationService.login(email, password);
        expect(recieved.user.email).toEqual(email);
    });
});