'use strict';
const firebase = require('../utilities/firebase-service');

const registrationService = class RegistrationService {

    async register(data) {
        const { email, password } = data;
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
            // const currentUser = await firebase.auth().currentUser;
            // await currentUser.updateProfile(data)
            return user;
        } catch (error) {
            // throw Error(error)
            throw Error('Error while Creating Users')
        }
    }

    async sendVerification(data) {
        try {
            const verify = await firebase.auth().currentUser;
            const verified = await verify.sendEmailVerification();
            return verified;
        } catch (error) {
            throw Error('Error while sending Verification email')
        }
    }

    async login(email, password) {
        try {
            const user = firebase.auth().signInWithEmailAndPassword(email, password);
            return user;
        } catch (error) {
            throw Error('Error while logging in email')
        }
    }
}

module.exports = registrationService;