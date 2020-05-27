const studentService = require('../StudentService');

describe('Student Enrollement Service', () => {
    beforeEach(async () => {
        // Clear all instances and calls to constructor and all methods:
        StudentService = new studentService();
    });
    it('example', async () => {
        expect(true).toEqual(true);
    });

});