const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', (req, res) => {
  User.query().then(users => {
    res.json(users);
  });
});

/*
router.post('/', (req, res, next) => {
  res.json('users post');
});
*/

module.exports = router;
