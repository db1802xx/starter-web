const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res, next) => {
  queries.getUsers().then(users => {
    res.json(users);
  });
});

/*
router.post('/', (req, res, next) => {
  res.json('users post');
});
*/

module.exports = router;
