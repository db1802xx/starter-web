const { Model } = require('objection');
const knex = require('../db/knex');

Model.knex(knex);

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    const Item = require('./Item');
    return {
      items: {
        relation: Model.HasManyRelation,
        modelClass: Item,
        join: {
          from: 'users.id',
          to: 'items.user_id'
        }
      }
    }
  }
}

module.exports = User;
