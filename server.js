const app = require('./app');
const connectDB = require('./config/db');

// Σύνδεση με τη βάση
connectDB();

// Εκκίνηση του server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
