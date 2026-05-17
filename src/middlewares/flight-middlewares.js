const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price
    ){
        return res.status(400).json({
            data: {},
            success: false,
            message: "Missing required fields",
            error: {}
        });
    }
    next();
}

module.exports = {
    validateCreateFlight

}