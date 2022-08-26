/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('messages', (table) => {
    table.increments();
    table.varchar('name').notNullable();
    table.varchar('email').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.string('message').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable('messages');
};
