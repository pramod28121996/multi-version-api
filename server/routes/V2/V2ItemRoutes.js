const express = require("express");
const router = express.Router();
const V2ItemController = require('../../controller/V2/V2ItemController')
const { urlCons } = require("../../../Libs/utils");

/**
 * @description Get all items
 * @member GET /api/V2/items/getAllItems
 */
router.get(urlCons.API_GET_ALL_ITEMS, V2ItemController.getAllItems);

/**
 * @description Get a item by passing id
 * @member GET /api/V2/items/:id
 */
router.get(urlCons.API_GET_ITEM_BY_ID, V2ItemController.getItemById);

module.exports = router;
