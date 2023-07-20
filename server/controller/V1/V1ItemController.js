const V1ItemService = require('../../services/V1/V1ItemService')
class V1ItemsController {
    async getAllItems(req, res) {
        try {
            const response = await V1ItemService.getAllItems()            
            res.send({ products: response })
        } catch (error) {
            console.log("error", error);
            res.send(error.message)
        }
    }

    async getItemById(req, res) {
        try {
            const { id } = req.params;
            const response = await V1ItemService.getItemById(id)            
            res.send({ products: response })
        } catch (error) {
            console.log("error", error);
            res.send(error.message)
        }
    }
}

module.exports = new V1ItemsController()