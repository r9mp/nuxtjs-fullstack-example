exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{ auth0_id: 'auth0|5ed7490a3a0e3a0013f132c1' }])
    })
}
