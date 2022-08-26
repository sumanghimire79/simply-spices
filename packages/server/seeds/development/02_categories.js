/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('Categories').del();
  await knex('Categories').insert([
    { id: 1, name: 'bud/flower', createdAt: knex.fn.now() },
    { id: 2, name: 'fruit/berry', createdAt: knex.fn.now() },
    { id: 3, name: 'seed', createdAt: knex.fn.now() },
    { id: 4, name: 'root/rhizome/bark', createdAt: knex.fn.now() },
    { id: 5, name: 'leaf', createdAt: knex.fn.now() },
  ]);
};
