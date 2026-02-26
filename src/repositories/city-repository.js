const {City} = require('../models/index')

class CityRepository{
    async createCity({name}){
        try{
            const city =await City.create({
                name: name
            });
           return city;
        } catch(error){
            throw {"something went wrong in city repository layer": error};
        }
    }
    async deleteCity(cityId){
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })
            return true;
        } catch (error) {
            throw {"something went wrong in city repository layer": error};
        }
    }
    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            throw {"something went wrong in city repository layer": error};
        }
    }
    async updateCity(cityId, data){
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        } catch (error) {
            throw {"something went wrong in city repository layer": error};
        }
    }
    async getAllCities(){
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
              throw {"something went wrong in city repository layer": error};
        }
    }
}
module.exports = CityRepository;