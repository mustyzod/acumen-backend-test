const express = require('express');
const router = express.Router();

const students = require('../controllers/studentController');

router.get('/list', students.list);
router.post('/enroll', students.enroll);
router.delete('/:id?', students.delete);

module.exports = router;