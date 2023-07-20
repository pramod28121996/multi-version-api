const express = require("express");
const router = express.Router();
const auth = require("../../controller/middleware/auth");
const V1ItemController = require('../../controller/V1/V1ItemController')
const { urlCons } = require("../../../Libs/utils");

/**
 * @description Get all items
 * @member GET /api/v1/items/getAllItems
 */
router.get(urlCons.API_GET_ALL_ITEMS, V1ItemController.getAllItems);

/**
 * @description Get a item by passing id
 * @member GET /api/v1/items/:id
 */
router.get(urlCons.API_GET_ITEM_BY_ID, auth, V1ItemController.getItemById);

module.exports = router;
