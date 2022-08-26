const express = require('express');

const router = express.Router({ mergeParams: true });

const ordersController = require('../controllers/orders.controller');

/**
 * @swagger
 * /api/orders:
 *  get:
 *    tags:
 *    - orders
 *    summary: Get all orders Products
 *    description:
 *      Will return all orders Products.
 *    produces: application/json
 *    parameters:
 *     - in: page
 *       name: query
 *       schema:
 *         type: Query Parameters
 *         description: To get all the orders products
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', async (req, res) => {
  try {
    const result = await ordersController.getOrders(req.query);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in get all message api/message/ ${error}`,
    });
  }
});

/**
 * @swagger
 * /api/orders/{ID}:
 *  get:
 *    tags:
 *    - orders
 *    summary: Get orders products by product ID
 *    description:
 *      Will return single products with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: id
 *       name: id
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the product to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id/user', async (req, res) => {
  try {
    const result = await ordersController.getOrderByID(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in get order by id  api/orders/:id ${error}`,
    });
  }
});
/**
 * @swagger
 * /api/orders/{ID}:
 *  get:
 *    tags:
 *    - orders
 *    summary: Get orders products by product ID
 *    description:
 *      Will return single products with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: id
 *       name: id
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the product to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', async (req, res) => {
  try {
    const result = await ordersController.getProductsByOrderID(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in get order by id  api/orders/:id ${error}`,
    });
  }
});

/**
 * @swagger
 * /api/orders:
 *  post:
 *    tags:
 *    - orders
 *    summary: Post orders products
 *    description:
 *      Will post single product.
 *    produces: application/json
 *    parameters:
 *     - in: body
 *       name: id
 *       schema:
 *         type: object
 *         required: true
 *         description: save to orders
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', async (req, res) => {
  try {
    const result = await ordersController.postOrders(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in post order api/orders/ ${error}`,
    });
  }
});

/**
 * @swagger
 * /api/orders/{ID}:
 *  delete:
 *    tags:
 *    - orders
 *    summary: delete orders by ID
 *    description:
 *      Will delete single orders with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: id
 *       name: id
 *       schema:
 *         type: integer
 *         required: true
 *         description: to delete the orders product that matches the  given product
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  ordersController
    .deleteOrders(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the exampleResource id does not exist
      if (result === 0) {
        res.status(404).send('The order ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
});

module.exports = router;
