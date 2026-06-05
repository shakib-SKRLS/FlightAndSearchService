const {FlightService} = require('../services/index');
const {SuccessCodes, ServerErrorCodes, ClientErrorCodes} = require('../utils/error-code');
const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price
        }

        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            success: true,
            message: "Successfully created a flight",
            data: flight,
            err: {}
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Not able to create a flight",
            data: {},
            err: error
        });
    }
}

const getAll = async (req, res) => {

    try {
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            success: true,
            message: "Successfully fetched all flights",
            data: flights,
            err: {}
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Not able to fetch flights",
            data: {},
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        if(flight){
            return res.status(SuccessCodes.OK).json({
                success: true,
                message: "Successfully fetched a flight",
                data: flight,
                err: {}
            });
        }
        return res.status(ClientErrorCodes.NOT_FOUND).json({
            success: false,
            message: "Flight not found",
            data: {},
            err: {}
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Not able to fetch a flight",
            data: {},
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await flightService.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            success: true,
            message: "Successfully updated a flight",
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Not able to update a flight",
            data: {},
            err: error
        });
    }
}

module.exports = {
    create,
    getAll,
    get,
    update
}
    
