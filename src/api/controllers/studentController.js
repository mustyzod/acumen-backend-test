const studentService = require('../../services/StudentService');
const StudentService = new studentService();
const users = {
    //list Enrolment
    list: async (req, res) => {
        try {
            // const user = await RegistrationService.register(email, password);
            // const verify = await RegistrationService.sendVerification();
            // return res.status(200).json({ status: "SUCCESS", message: `Verification token sent to ${user.user.email}` });
        } catch (error) {
            // return res.status(400).json({ status: 400, message: error.message });
        }
    },

    //  Enroll student
    enroll: async (req, res, next) => {
        const credentials = {
            email,
            password
        } = req.body;
        try {
            const users = await RegistrationService.login(credentials);
            return res.status(200).json({ status: 200, message: "Successfully Logged Users", data: users });
        } catch (error) {
            // return res.status(400).json({ status: 400, message: error.message });
        }
    },
    //  Enroll student
    delete: async (req, res, next) => {
        const credentials = {
            email,
            password
        } = req.body;
        try {
            const users = await RegistrationService.login(credentials);
            return res.status(200).json({ status: 200, message: "Successfully Logged Users", data: users });
        } catch (error) {
            // return res.status(400).json({ status: 400, message: error.message });
        }
    }
}

module.exports = users;