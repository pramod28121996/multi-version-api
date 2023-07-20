const V1ItemService = require('../../services/V1/V1ItemService')
class V1ItemsController {
    async getAllItems(req, res) {
        try {
            const response = await V1ItemService.getAllItems()
            console.log(response);
            res.send({ products: response })
        } catch (error) {
            console.log("error",error);
            res.send(error)            
        }
    }
}

module.exports = new V1ItemsController()