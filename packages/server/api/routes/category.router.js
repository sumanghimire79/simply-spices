const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const controller = require('../controllers/category.controller');

/**
 * @swagger
 * /category:
 *  get:
 *    tags:
 *    - category
 *    summary: Get all categories
 *    description:
 *      Will return all categories.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/', (req, res, next) => {
  controller
    .getCategories()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /category/{ID}:
 *  get:
 *    tags:
 *    - category
 *    summary: Get products by category ID.
 *    description: Will return all products with a matching category ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: string
 *         required: true
 *         description: The ID of the categoryto get.
 *     - in: query
 *       name: sort
 *       type: string
 *       enum:
 *       - newest
 *       - lowestPrice
 *       - name
 *       default: available
 *       collectionFormat: multi
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/:category', (req, res, next) => {
  controller
    .getProductByCategory(req.params.category, req.query)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
