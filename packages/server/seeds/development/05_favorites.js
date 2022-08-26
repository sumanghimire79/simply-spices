/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('Favorites').del();
  await knex('Favorites').insert([
    { userId: 1, productId: 1, createdAt: knex.fn.now() },
    { userId: 2, productId: 2, createdAt: knex.fn.now() },
    { userId: 3, productId: 3, createdAt: knex.fn.now() },
    { userId: 4, productId: 4, createdAt: knex.fn.now() },
    { userId: 5, productId: 5, createdAt: knex.fn.now() },
    { userId: 6, productId: 6, createdAt: knex.fn.now() },
    { userId: 7, productId: 7, createdAt: knex.fn.now() },
    { userId: 8, productId: 8, createdAt: knex.fn.now() },
    { userId: 9, productId: 9, createdAt: knex.fn.now() },
  ]);
};
