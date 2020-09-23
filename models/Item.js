const { Model } = require('objection');
const knex = require('../db/knex');

Model.knex(knex);

class Item extends Model {
  static get tableName() {
    return 'items';
  }

  static get relationMappings() {
    return {
      children: {}
    }
  }
}

module.exports = Item;
