const mongoose = require('mongoose');

function DbConnect() {
    const DB_URL = process.env.DB_URL;

    // Database connection
    mongoose.connect(DB_URL)
        .then(() => {
            console.log('DB connected...');
        })
        .catch(err => {
            console.error('Connection error:', err);
        });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
}

module.exports = DbConnect;
