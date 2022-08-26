/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex('Orders').del();
  await knex('Orders').insert([
    { id: 1, userId: 1, status: 'created', createdAt: knex.fn.now() },
    { id: 2, userId: 2, status: 'confirmed', createdAt: knex.fn.now() },
    { id: 3, userId: 3, status: 'payed', createdAt: knex.fn.now() },
    { id: 4, userId: 4, status: 'created', createdAt: knex.fn.now() },
    { id: 5, userId: 5, status: 'payed', createdAt: knex.fn.now() },
    { id: 6, userId: 6, status: 'confirmed', createdAt: knex.fn.now() },
    { id: 7, userId: 7, status: 'created', createdAt: knex.fn.now() },
    { id: 8, userId: 8, status: 'confirmed', createdAt: knex.fn.now() },
    { id: 9, userId: 9, status: 'created', createdAt: knex.fn.now() },
    { id: 10, userId: 10, status: 'payed', createdAt: knex.fn.now() },
  ]);
};
