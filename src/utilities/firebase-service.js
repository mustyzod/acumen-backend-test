const firebase = require("firebase/app");
require("firebase/auth");

const serviceAccount = require('../../config.json');
const fb = firebase.initializeApp({
    apiKey: serviceAccount.apiKey,
    databaseURL: "https://acumentest-8621a.firebaseio.com"
});

module.exports = fb;