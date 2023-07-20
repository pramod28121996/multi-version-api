const express = require("express");
const router = express.Router();
const V1ItemController = require('../../controller/V1/V1ItemController')
const { urlCons } = require("../../../Libs/utils");

/**
 * @description Get all items
 * @member GET /api/v1/items/getAllItems
 */
router.get(urlCons.API_GET_ALL_ITEMS, V1ItemController.getAllItems);

module.exports = router;
