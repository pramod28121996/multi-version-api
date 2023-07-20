const express = require("express");
const router = express.Router();
const ItemController = require('../controller/ItemController')
const { urlCons } = require('../../../Libs/utils')
const auth = require("../../middleware/auth");

/**
 * @description Get all posts
 * @member GET /api/v1/posts/getAllPosts
 */
router.get(urlCons.API_GET_ALL_ITEMS, ItemController.getAllPosts);

/**
 * @description Get a posts by passing id
 * @member GET /api/v1/posts/:id
 */
router.get(urlCons.API_GET_ITEM_BY_ID, auth, ItemController.getPostById);

/**
 * @description Get a post comments
 * @member GET /api/v1/posts/:id/comments
 */
router.get(urlCons.API_POST_COMMENTS_BY_ID, auth, ItemController.getPostCommentById);

module.exports = router;
