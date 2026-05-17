const express = require('express');

const {FlightMiddlewares} = require("../../middlewares/index");
const router = express.Router();
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);
router.get('/city', CityController.getAllCities);

router.post(
    '/flights', 
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);
router.get('/flights', FlightController.getAll);


router.post('/airport', AirportController.create);


module.exports = router;