const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Φόρτωση των μεταβλητών από το config.env
dotenv.config({ path: './config.env' });

const connectDB = async () => {
    try {
        const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connection successful!');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1); // Τερματισμός αν αποτύχει η σύνδεση
    }
};

module.exports = connectDB;
