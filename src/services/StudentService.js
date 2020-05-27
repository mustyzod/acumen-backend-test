'use strict';
const firebase = require('../utilities/firebase-service');
const db = firebase.firestore();

const studentService = class StudentService {
    constructor() {
        this.collection = 'enrollment';
    }
    //  List student enrollments
    async list() {
        try {
            const currentUser = await firebase.auth().currentUser;
            const collectionRef = await db.collection(this.collection);
            const query = await collectionRef.where('student_id', '==', currentUser.uid);
            let result = [];

            const final = await query.get()
                .then(result => {
                    return result;
                })
            final.forEach(doc => {
                result.push(doc.data());
            })
            return result;
        } catch (error) {
            // throw Error(error)
            throw Error('Error while fetching list')
        }
    }
    //  Enroll student
    async enroll(data) {
        try {
            const currentUser = await firebase.auth().currentUser;
            const enrollData = {
                student_id: currentUser.uid,
                coursename: data,
                registration_date: new Date(Date.now()).toLocaleString()
            }

            return db.collection(this.collection).add(enrollData)
                .then(ref => {
                    return ref.id;
                });
        } catch (error) {
            // throw Error(error)
            throw Error('Error while enrolling student')
        }
    }
    //  Delete enrollment
    async delete(id) {
        try {
            const user = db.collection(this.collection).doc(id).delete();
            return user;
        } catch (error) {
            throw Error('Error while deleting course')
        }
    }
}

module.exports = studentService;