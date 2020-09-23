const { Model } = require('objection');
const knex = require('../db/knex');

Model.knex(knex);

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {
      children: {}
    }
  }
}

module.exports = User;
