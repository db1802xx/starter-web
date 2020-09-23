const bcrypt = require('bcrypt');

function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  console.log(hash);
  return hash;
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'user01', password_digest: hashPassword('somepass01')},
        {username: 'user02', password_digest: hashPassword('somepass03')},
        {username: 'user03', password_digest: hashPassword('somepass03')},
      ]);
    });
};
