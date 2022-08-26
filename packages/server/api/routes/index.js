const express = require('express');

const router = express.Router();
const exampleResources = require('./exampleResources.router');

const category = require('./category.router');
const products = require('./products.router');
const favorites = require('./favorites.router');
const orders = require('./orders.router');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const messages = require('./messages.router');
const users = require('./users.router');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0',
      title: 'Final project',
      description: 'API documentation for the final project',
      contact: {},
    },
    host: '',
    basePath: '/api',
  },
  securityDefinitions: {},
  apis: ['./api/routes/*.js'],
};

const swaggerDocument = swaggerJsDoc(swaggerOptions);

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use('/exampleResources', exampleResources);
router.use('/category', category);
router.use('/products', products);
router.use('/favorites', favorites);
router.use('/messages', messages);
router.use('/orders', orders);
router.use('/users', users);

module.exports = router;
