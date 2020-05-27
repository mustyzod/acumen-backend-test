const registrationService = require('../../services/RegistrationService');
const RegistrationService = new registrationService();

const users = {
    //register
    createUser: async (req, res) => {
        const userData = {
            first_name,
            last_name,
            email,
            username,
            password,
            dob,
            gender
        } = req.body;
        try {
            const user = await RegistrationService.register(userData);
            await RegistrationService.sendVerification();
            return res.status(200).json({ status: "SUCCESS", message: `Verification token sent to ${user.user.email}` });
        } catch (error) {
            return res.status(400).json({ status: 400, message: "Registration failed", errors: error.message });
        }
    },

    //  Login
    login: async (req, res, next) => {
        const credentials = {
            email,
            password
        } = req.body;
        try {
            const users = await RegistrationService.login(email, password);
            // const { user } = users;
            // const {
            //     first_name,
            //     last_name,
            //     gender,
            //     age
            // } = user;
            return res.status(200).json({
                status: "SUCCESS",
                message: "Successfully Logged User",
                // user: {
                //     first_name: user.first_name,
                //     last_name: user.last_name,
                //     gender: user.gender,
                //     age: user.age
                // },
                // users
            });
        } catch (error) {
            return res.status(400).json({ status: "FAILED", message: "Login failed", error: error.message });
        }
    }
}

module.exports = users;