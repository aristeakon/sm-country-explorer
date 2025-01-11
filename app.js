const express = require('express');
const path = require('path');
const countryRoutes = require('./routes/countryRoutes');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Routes
app.use('/api/v1/countries', countryRoutes);

module.exports = app;
