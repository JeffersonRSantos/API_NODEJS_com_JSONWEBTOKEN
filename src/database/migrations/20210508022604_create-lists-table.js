
exports.up = function(knex) {
  return knex.schema.createTable('lists', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('lists')
};
