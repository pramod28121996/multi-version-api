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
 * @description Get Token Route
 * @member GET /get-token
 */
route.get("/get-token", services.getToken);

module.exports = route;
