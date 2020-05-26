const firebase = require('../utilities/firebase-service');
const db = firebase.firestore();

enrollment = {
    add: async (data) => {
        const added = await db.collection('enrollment').add(data);
        return added;
    }
}

module.export = enrollment;