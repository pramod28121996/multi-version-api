const V2ItemService = require('../../services/V2/V2ItemService')
class V2ItemsController {
    async getAllItems(req, res) {
        try {
            const response = await V2ItemService.getAllItems()
            res.send({ products: response })
        } catch (error) {
            console.log("error", error);
            res.send(error.message)
        }
    }
    async getItemById(req, res) {
        try {
            const { id } = req.params;
            const response = await V2ItemService.getItemById(id)
            res.send({ products: response })
        } catch (error) {
            console.log("error", error);
            res.send(error.message)
        }
    }
}

module.exports = new V2ItemsController()