class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud repository layer");
            throw {error};
        }
    }

    async destroy(id){
        try {
            const response = await this.model.destroy({ where: { id } });
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud repository layer");
            throw {error};
        }
    }

    async get(id){
        try {
            const response = await this.model.findByPk(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud repository layer");
            throw {error};
        }
    }

    async getAll(){
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud repository layer");
            throw {error};
        }
    }
    async update(id, data){
        try {
            const response = await this.model.update(data, { where: { id } });
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud repository layer");
            throw {error};
        }
    }

}


module.exports = CrudRepository;