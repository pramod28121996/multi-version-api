const express = require("express");
const router = express.Router();
const { urlCons } = require('../../../Libs/utils')
const TokenController = require("../controller/TokenController");

/**
 * @description Get all posts
 * @member GET /api/v1/get-token
 */
router.get(urlCons.API_GET_TOKEN, TokenController.getToken);

module.exports = router;
