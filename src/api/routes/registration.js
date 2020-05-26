const express = require('express');
const router = express.Router();
const registration = require('../controllers/registrationController');

router.post('/register', registration.createUser);
router.post('/login', registration.login);

module.exports = router;