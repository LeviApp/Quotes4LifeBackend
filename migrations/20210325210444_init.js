
exports.up = function(knex) {
  return knex.schema.createTable('quotes', table => {
      table.increments('id');
      table.string('title').notNullable();
      table.string('text_body').notNullable();
      table.string('img_url').notNullable();
      table.timestamps(true, true);
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('quotes')
};
