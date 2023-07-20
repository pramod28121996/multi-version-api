const express = require("express");
const router = express.Router();
const V2ItemController = require('../../controller/V2/V2ItemController')
const { urlCons } = require("../../../Libs/utils");

/**
 * @description Get all items
 * @member GET /api/V2/items/getAllItems
 */
router.get(urlCons.API_GET_ALL_ITEMS, V2ItemController.getAllItems);

module.exports = router;
