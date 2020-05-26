const express = require('express');
const app = express();
// const firestore = require('./src/utilities/firebase-service');

app.use(express.json());

app.use('/auth', require('./src/api/routes/registration'));

const PORT = process.env.PORT || 5001


app.listen(PORT, () => {
    console.log('-------------------------------');
    console.log(`Application Server Successfully running on port ${PORT}`);
    console.log('-------------------------------');
})