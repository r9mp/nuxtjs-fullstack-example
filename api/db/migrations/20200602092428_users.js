exports.up = function (knex) {
  return knex.schema.createTable('users', (t) => {
    t.increments('id')
    t.string('auth0_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
