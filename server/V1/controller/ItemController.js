const ItemService = require('../services/ItemService')
const jwt = require("jsonwebtoken");
class ItemController {
    async getAllPosts(req, res) {
        try {
            const response = await ItemService.getAllPosts()
            res.send({ products: response })
        } catch (error) {
            console.log("error", error);
            res.send(error.message)
        }
    }

    async getItemById(req, res) {
        try {
            const { id } = req.params;
            const response = await ItemService.getItemById(id)
            res.send({ products: response })
        } catch (error) {
            console.log("error", error);
            res.send(error.message)
        }
    }
    async getToken(req, res) {
        try {
            const email = "testmail@gmail.com";
            const token = jwt.sign({ user_id: 1, email }, process.env.TOKEN_KEY, {
                expiresIn: "2h",
            });
            res.send({ token: token, expiresIn: "2h" });
        } catch (error) {
            console.log("error", error);
            res.send(error.message)
        }
    }

}

module.exports = new ItemController()