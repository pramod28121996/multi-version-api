const express = require("express");
const route = express.Router();
const auth = require("../controller/middleware/auth");

const services = require("../services/render");

/**
 * @description Root Route
 * @member GET /
 */
route.get("/", services.homeRoutes);

/**
 * @description Root Route
 * @member GET item/:id
 */
route.get("/item/:id", services.getItemById);

/**
 * @description Get Token Route
 * @member GET /get-token
 */
route.get("/get-token", services.getToken);

/**
 * @description List of items with jwt authentication
 * @member GET /items
 */
route.get("/items", auth, services.itemsRoutes);

/**
 * @description List of items with jwt authentication
 * @member POST /duplicate
 */
route.post("/duplicate", auth, services.duplicateNumber);

module.exports = route;
