const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const serviceAccount = require('../../config.json');
const fb = firebase.initializeApp(serviceAccount);

module.exports = fb;