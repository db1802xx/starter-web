const { ENVIRONMENT } = require('../config');
const config = require("../knexfile.js")[ENVIRONMENT];

module.exports = require('knex')(config);
