const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const response = await cityService.createCity(req.body);
        console.log(response);
        return res.status(201).json({
            success: true,
            message: "Successfully created a city",
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Not able to create a city",
            data: {},
            err: error
        });
    }
}
const destroy = async (req, res) => {
    try {
        const response = await cityService.destroy(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Successfully deleted a city",
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Not able to delete a city",
            data: {},
            err: error
        });
    }
}
const get = async (req, res) => {
    try {
        const city = await cityService.get(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Successfully fetched a city",
            data: city,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Not able to fetch a city",
            data: {},
            err: error
        });
    }
}
const update = async (req, res) => {
    try {
        const response = await cityService.update(req.params.id, req.body);
        return res.status(200).json({
            success: true,
            message: "Successfully updated a city",
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Not able to update a city",
            data: {},
            err: error 
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}