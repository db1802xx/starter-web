const db = require("./knex.js");

module.exports = {
  getUsers() {
    return db('users');
  },
  getUser(username) {
    return db('users').where({username: username}).first().then(user => {
      return user;
    });
  },

  test() {
    return new Promise((res) => {
      db('users').then((data) => {
        res(data);
      });
    });
  }
};
