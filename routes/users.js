const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const uServ = require('../services/user.service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST add user. */
router.post('/signup', function(req, res, next) {
  const fn = req.firstName;
  const ln = req.lastName;
  const em = req.email;
  const pw = req.password;
  const pw2 = req.password2;
  const u = req.body.user;
  if (u === null || u === {}) {
    res.status(400).json({status: 'No user object present'});
    next(createError(404));
  }
  res.send(uServ.createUser());
});

module.exports = router;
