
exports.up = function(knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments();
    table.string('name');
    table.string('content');
    table.integer('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('items');
};
