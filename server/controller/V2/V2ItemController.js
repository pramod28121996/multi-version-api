const V2ItemService = require('../../services/V2/V2ItemService')
class V2ItemsController {
    async getAllItems(req,res) {
        try {
            const response = await V2ItemService.getAllItems()
            res.send({ products: response })
        } catch (error) {
            console.log("error",error);
            res.send(error)            
        }
    }
}

module.exports = new V2ItemsController()