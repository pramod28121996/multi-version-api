const ItemService = require('../services/ItemService')
const jwt = require("jsonwebtoken");
class TokenController {   
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

module.exports = new TokenController()