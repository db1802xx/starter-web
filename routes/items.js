const express = require('express');
const router = express.Router();

const Item = require('../models/Item');

router.get('/', (req, res) => {
  Item.query().then(items => {
    res.json(items);
  });
});

/*
router.post('/', (req, res, next) => {
  res.json('users post');
});
*/

module.exports = router;
