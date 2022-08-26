const express = require('express');

const router = express.Router({ mergeParams: true });

const userController = require('../controllers/users.controller');

/* all users
 */

/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *    - users
 *    summary: get all users
 *    description:
 *      Will return all users
 *    produces: application/json
 *    parameters:
 *     - in: page
 *       name: query
 *       schema:
 *         type: Query Parameters
 *         description: get users
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/', async (req, res) => {
  try {
    const result = await userController.getAllUsers(req.query);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in get all users api/users/ ${error}`,
    });
  }
});

/* post user
 */

/**
 * @swagger
 * /users:
 *  post:
 *    tags:
 *    - users
 *    summary: post user
 *    description:
 *      Will post a user
 *    produces: application/json
 *    parameters:
 *     - in: id
 *       name: post user
 *       schema:
 *         type: integer
 *         required: true
 *         description: The post message
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.post('/', async (req, res) => {
  try {
    const result = await userController.postUser(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in post user api/users/ ${error}`,
    });
  }
});

/* user by id
 */

/**
 * @swagger
 * /users/{ID}:
 *  get:
 *    tags:
 *    - users
 *    summary: get user by ID
 *    description:
 *      Will return single user with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: id
 *       name: id
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the user to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/:id', async (req, res) => {
  try {
    const result = await userController.getUserByID(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in get user by id  api/users/:id ${error}`,
    });
  }
});

/* put user by id
 */

/**
 * @swagger
 * /users/{ID}:
 *  put:
 *    tags:
 *    - users
 *    summary: update users by ID
 *    description:
 *      Will edit users  with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: id
 *       name: id
 *       schema:
 *         type: integer
 *         required: true
 *         description: The users to edit
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.put('/:id', async (req, res) => {
  try {
    const result = await userController.updateUserByID(req.body, req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in put user api/users/ ${error}`,
    });
  }
});

/* delete user by id
 */

/**
 * @swagger
 * /users/{ID}:
 *  delete:
 *    tags:
 *    - users
 *    summary: delete user by ID
 *    description:
 *      Will delete single user with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: id
 *       name: id
 *       schema:
 *         type: integer
 *         required: true
 *         description: to delete the user
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.delete('/:id', async (req, res) => {
  try {
    const result = await userController.deleteUserByID(req.body, req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in delete user by id api/users/ ${error}`,
    });
  }
});

module.exports = router;
