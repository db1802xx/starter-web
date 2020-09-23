const express = require('express');
const router = express.Router();
const User = require('../models/User');

function stripUser(user) {
  user.password_digest = undefined;
}
function stripUsers(users) {
  users.forEach(user => {
    stripUser(user);
  });
}

router.get('/', (req, res) => {
  User.query().withGraphFetched('items').then(users => {
    stripUsers(users)
    res.json(users);
  });
});

/*
router.post('/', (req, res, next) => {
  res.json('users post');
});
*/

module.exports = router;
