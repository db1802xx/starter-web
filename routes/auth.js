const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
console.log('SECRET = ' + SECRET);

router.post('/login', (req, res, next) => {
  console.log('LOGIN');
  queries.getUser(req.body.username).then((user) => {
    if (!user) {
      res.status(401).json({
        error: 'No user by that name'
      })
    } else {
      return bcrypt.compare(req.body.password, user.password_digest).then(isAuthenticated => {
        if (!isAuthenticated) {
          res.status(401).json({
            error: 'Unauthorized Access!'
          });
        } else {
          return jwt.sign(user, SECRET, (error, token) => {
            res.status(200).json({token});
          });
        }
      });
    }
    res.json(user);
  });
});

router.get('/verify', (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, SECRET, (error, decodedToken) => {
    if (error) {
      res.status(401).json({
        message: 'Unauthorized Access!'
      });
    } else {
      console.log(decodedToken);
      res.status(200).json({
        id: decodedToken.id,
        username: decodedToken.username
      })
    }
  });
});

module.exports = router;
