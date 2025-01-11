const express = require('express');
const { getTopCountries,getAllCountries, getSafetyIndex, getCostOfLiving, getRestaurantPrice ,getQualityOfLife, getAdventure,getCulturalHeritage  } = require('../controllers/countryController');

const router = express.Router();

router.get('/top-countries', getTopCountries);

router.get('/', getAllCountries);

// Διαδρομή για ταξινόμηση βάσει Safety Index
router.get('/routecontroler', getSafetyIndex);
// Διαδρομή για ταξινόμηση βάσει Cost of Living
router.get('/cost-of-living', getCostOfLiving);

// Διαδρομή για ταξινόμηση βάσει Restaurant Price Index
router.get('/restaurant-price', getRestaurantPrice);

// Διαδρομή για ταξινόμηση βάσει Quality of Life
router.get('/quality-of-life', getQualityOfLife);

// Διαδρομή για ταξινόμηση βάσει Adventure
router.get('/adventure', getAdventure);

// Διαδρομή για ταξινόμηση βάσει Cultural Heritage
router.get('/cultural-heritage', getCulturalHeritage);

module.exports = router;
