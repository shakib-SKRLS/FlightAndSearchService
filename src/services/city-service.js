const {CityRepository} = require('../repositories/index');

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }
    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            throw {"something went wrong in city service layer": error};
        }
    } 
    async deleteCity(cityId){
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            throw {"something went wrong in city service layer": error};
        }
    }
    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            throw {"something went wrong in city service layer": error};
        }
    }
    async updateCity(cityId, data){
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            throw {"something went wrong in city service layer": error};
        }
    }
    async getAllCities(){
        try {
            const cities = await this.cityRepository.getAllCities();
            return cities;
        } catch (error) {
            throw {"something went wrong in city service layer": error};
        }
    }
}

module.exports = CityService;