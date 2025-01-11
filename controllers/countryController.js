const Country = require('../models/countryModel');

// GET: Φέρνει τις χώρες βάσει Quality of Life (καλύτερες ή χειρότερες)
exports.getQualityOfLife = async (req, res) => {
    try {
        const { type, limit } = req.query;

        if (!type || (type !== 'best' && type !== 'worst')) {
            return res.status(400).json({ message: 'Type must be "best" or "worst".' });
        }

        const sortOrder = type === 'best' ? 1 : -1; // Καλύτερες (1) ή Χειρότερες (-1)
        
        const qualityOfLife = await Country.find({ qualityOfLife: { $ne: null } }) // Μόνο εγγραφές με ορισμένο qualityOfLife
            .sort({ qualityOfLife: sortOrder }) // Ταξινόμηση βάσει Quality of Life
            .limit(parseInt(limit) || 10); // Περιορισμός αποτελεσμάτων

        res.status(200).json({
            status: 'success',
            data: qualityOfLife,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Server error!',
        });
    }
};

// GET: Φέρνει τις χώρες βάσει Adventure (καλύτερες ή χειρότερες)
exports.getAdventure = async (req, res) => {
    try {
        const { type, limit } = req.query;

        if (!type || (type !== 'best' && type !== 'worst')) {
            return res.status(400).json({ message: 'Type must be "best" or "worst".' });
        }

        const sortOrder = type === 'best' ? 1 : -1; // Καλύτερες (1) ή Χειρότερες (-1)
        
        const adventure = await Country.find({ adventure: { $ne: null } }) // Μόνο εγγραφές με ορισμένο adventure
            .sort({ adventure: sortOrder }) // Ταξινόμηση βάσει Adventure
            .limit(parseInt(limit) || 10); // Περιορισμός αποτελεσμάτων

        res.status(200).json({
            status: 'success',
            data: adventure,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Server error!',
        });
    }
};

// GET: Φέρνει τις χώρες βάσει Cultural Heritage (καλύτερες ή χειρότερες)
exports.getCulturalHeritage = async (req, res) => {
    try {
        const { type, limit } = req.query;

        if (!type || (type !== 'best' && type !== 'worst')) {
            return res.status(400).json({ message: 'Type must be "best" or "worst".' });
        }

        const sortOrder = type === 'best' ? 1 : -1; // Καλύτερες (1) ή Χειρότερες (-1)
        
        const culturalHeritage = await Country.find({ heritage: { $ne: null } }) // Μόνο εγγραφές με ορισμένο heritage
            .sort({ heritage: sortOrder }) // Ταξινόμηση βάσει Cultural Heritage
            .limit(parseInt(limit) || 10); // Περιορισμός αποτελεσμάτων

        res.status(200).json({
            status: 'success',
            data: culturalHeritage,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Server error!',
        });
    }
};


// GET: Φέρνει τις χώρες βάσει Restaurant Price Index (φθηνότερες ή ακριβότερες)
exports.getRestaurantPrice = async (req, res) => {
    try {
        const { type, limit } = req.query;

        if (!type || (type !== 'cheapest' && type !== 'most_expensive')) {
            return res.status(400).json({ message: 'Type must be "cheapest" or "most_expensive".' });
        }

        const sortOrder = type === 'cheapest' ? 1 : -1; // Φθηνότερες (1) ή Ακριβότερες (-1)
        
        const restaurantPrices = await Country.find({ restaurantPriceIndex: { $ne: null } }) // Μόνο εγγραφές με ορισμένο restaurantPriceIndex
            .sort({ restaurantPriceIndex: sortOrder }) // Ταξινόμηση βάσει Restaurant Price Index
            .limit(parseInt(limit) || 10); // Περιορισμός αποτελεσμάτων

        res.status(200).json({
            status: 'success',
            data: restaurantPrices,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Server error!',
        });
    }
};

// GET: Φέρνει τις χώρες βάσει κόστους ζωής (φθηνότερες ή ακριβότερες)
exports.getCostOfLiving = async (req, res) => {
    try {
        const { type, limit } = req.query;

        if (!type || (type !== 'cheapest' && type !== 'most_expensive')) {
            return res.status(400).json({ message: 'Type must be "cheapest" or "most_expensive".' });
        }

        const sortOrder = type === 'cheapest' ? 1 : -1; // Φθηνότερες (1) ή Ακριβότερες (-1)
        
        const costOfLiving = await Country.find({ costOfLivingIndex: { $ne: null } }) // Μόνο εγγραφές με ορισμένο costOfLivingIndex
            .sort({ costOfLivingIndex: sortOrder }) // Ταξινόμηση βάσει κόστους ζωής
            .limit(parseInt(limit) || 10); // Περιορισμός αποτελεσμάτων

        res.status(200).json({
            status: 'success',
            data: costOfLiving,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Server error!',
        });
    }
};

// GET: Φέρνει τις εγγραφές ταξινομημένες με βάση τον δείκτη ασφάλειας (Safety Index)
exports.getSafetyIndex = async (req, res) => {
    try {
        const { limit } = req.query;

        const safetyIndex = await Country.find({ homicideRate: { $ne: null } }) // Φέρνει εγγραφές με ορισμένο homicideRate
            .sort({ homicideRate: 1 }) // Ταξινόμηση κατά αύξουσα σειρά (χαμηλότερο = καλύτερο)
            .limit(parseInt(limit) || 10); // Περιορισμός αποτελεσμάτων

        res.status(200).json({
            status: 'success',
            data: safetyIndex,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Server error!',
        });
    }
};
// GET: Φέρνει τις κορυφαίες εγγραφές βάσει ενός κριτηρίου
exports.getTopCountries = async (req, res) => {
    try {
        const { criterion, limit } = req.query;

        if (!criterion) {
            return res.status(400).json({ message: 'Criterion is required!' });
        }

        const topCountries = await Country.find()
            .sort({ [criterion]: -1 }) // Ταξινόμηση κατά φθίνουσα σειρά
            .limit(parseInt(limit) || 10); // Περιορισμός αποτελεσμάτων

        res.status(200).json({
            status: 'success',
            data: topCountries,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Server error!',
        });
    }
};
// GET: Φέρνει όλες τις εγγραφές
exports.getAllCountries = async (req, res) => {
    try {
        const allCountries = await Country.find();

        res.status(200).json({
            status: 'success',
            results: allCountries.length,
            data: allCountries,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Server error!',
        });
    }
};
