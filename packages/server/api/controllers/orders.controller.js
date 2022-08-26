const knex = require('../../config/db');

const getOrders = async () => {
  const orders = await knex('Orders')
    .join('Users', 'Users.id', 'Orders.userId')
    .join('OrderItems', 'OrderItems.orderId', 'Orders.id')
    .join('Products', 'Products.id', 'OrderItems.productId');
  return orders;
};

const postOrders = async (request) => {
  const orderPost = await knex('Orders').insert(request);
  return orderPost;
};

const getOrderByID = async (id) => {
  if (isNaN(id)) {
    return 'id must contain number';
  }
  const orderByID = await knex('Orders')
    .select('Users.*')
    .where({ 'Orders.id': id })
    .join('Users', 'Users.id', 'Orders.userId');
  if (orderByID.length === 0) {
    return {
      code: '404',
      status: 'failed',
      error: 'order ID not found',
      message: 'Invalid ID',
    };
  }
  return orderByID;
};
const getProductsByOrderID = async (id) => {
  if (isNaN(id)) {
    return 'id must contain number';
  }
  const getOrderByProductID = await knex('OrderItems')
    .where({ id })
    .join('Products', 'Products.id', 'OrderItems.productId');

  if (getOrderByProductID.length === 0) {
    return {
      code: '404',
      status: 'failed',
      error: 'order ID not found',
      message: 'Invalid ID',
    };
  }
  return getOrderByProductID;
};

const deleteOrders = async (reqId, body) => {
  const ordersdel = await knex('Orders')
    .where({ productId: reqId })
    .delete(body);
  return ordersdel;
};

module.exports = {
  getOrders,
  getOrderByID,
  getProductsByOrderID,
  postOrders,
  deleteOrders,
};
