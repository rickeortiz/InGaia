
exports.up = function(knex) {
    return knex.schema.createTable('log', function(table) {
        table.increments('id').primary();
        table.string('city').notNullable();
        table.string('country').notNullable();
        table.string('temp').notNullable();
        table.string('weather').notNullable();
        table.integer('humidity').notNullable();
        table.integer('cloudinessPercent').notNullable();
        table.string('categoryMusic').notNullable();
        table.timestamp('timestamp').defaultTo(knex.fn.now());
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('log');
  };
  