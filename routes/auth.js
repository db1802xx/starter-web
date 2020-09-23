const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');

router.post('/login', (req, res, next) => {
  console.log('LOGIN');
  User.query().findOne({username: req.body.username}).then(user => {
    if (!user) {
      res.status(401).json({
        error: 'No user by that name'
      })
    } else {
      bcrypt.compare(req.body.password, user.password_digest).then(isAuthenticated => {
        if (!isAuthenticated) {
          res.status(401).json({
            error: 'Unauthorized Access!'
          });
        } else {
          user.password_digest = undefined;
          console.log(user);
          jwt.sign(user.toJSON(), JWT_SECRET, (error, token) => {
            res.status(200).json({token});
          });
        }
      });
    }
  });
});

router.get('/verify', (req, res, next) => {
  console.log('VERIFY');
  // const token = req.headers.authorization.split(' ')[1];
  const auth = req.headers.authorization;
  const token = typeof auth === 'string' ? auth.split(' ')[1] : undefined;
  jwt.verify(token, JWT_SECRET, (error, decodedToken) => {
    if (error) {
      res.status(401).json({
        message: 'Unauthorized Access!'
      });
    } else {
      const user = User.fromJson(decodedToken);
      console.log(user);
      res.status(200).json({
        id: user.id,
        username: user.username
      })
    }
  });
});

module.exports = router;
