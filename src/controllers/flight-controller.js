const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            success: true,
            message: "Successfully created a flight",
            data: flight,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Not able to create a flight",
            data: {},
            err: error
        });
    }
}

module.exports = {
    create
}