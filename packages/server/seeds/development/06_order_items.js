/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('OrderItems').del();
  await knex('OrderItems').insert([
    { orderId: 1, productId: 10, quantity: 1 },
    { orderId: 2, productId: 9, quantity: 2 },
    { orderId: 3, productId: 8, quantity: 3 },
    { orderId: 4, productId: 7, quantity: 1 },
    { orderId: 5, productId: 6, quantity: 2 },
    { orderId: 6, productId: 5, quantity: 3 },
    { orderId: 7, productId: 4, quantity: 1 },
    { orderId: 8, productId: 3, quantity: 2 },
    { orderId: 9, productId: 2, quantity: 3 },
    { orderId: 10, productId: 1, quantity: 1 },
  ]);
};
