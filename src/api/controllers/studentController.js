const studentService = require('../../services/StudentService');
const StudentService = new studentService();

const users = {
    //list Enrolment
    list: async (req, res) => {
        try {
            const enrollments = await StudentService.list();
            return res.status(200).json({ enrollments, status: "SUCCESS", message: `You have ${enrollments.length} enrollments` });
        } catch (error) {
            return res.status(400).json({ status: "FAILED", message: "Error Fetching Enrollments", error: error.message });
        }
    },

    //  Enroll student
    enroll: async (req, res, next) => {
        const { title } = req.body;
        try {
            const enrollments = await StudentService.enroll(title);
            return res.status(200).json({ status: 200, message: "Successfully Enrolled", enrollment_id: enrollments });
        } catch (error) {
            return res.status(400).json({ status: "FAILED", message: "Registration Failed", error: error.message });
        }
    },

    //  delete enrollment
    delete: async (req, res, next) => {
        const { id } = req.query;
        try {
            const enrollment = await StudentService.delete(id);
            return res.status(200).json({ status: 200, message: "Successfully Deleted Enrollment", data: enrollment });
        } catch (error) {
            return res.status(400).json({ status: "FAILED", message: "Deletion failed", error: error.message });
        }
    }
}

module.exports = users;