const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    country: { type: String, required: true },
    qualityOfLife: Number,
    adventure: Number,
    heritage: Number,
    costOfLivingIndex: Number,
    restaurantPriceIndex: Number,
    homicideRate: Number,
});

module.exports = mongoose.model('Country', countrySchema);
