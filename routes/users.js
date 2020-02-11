const User = require('../models/user');

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
  let exists = false;
  let user = new User();
  User.find({email: req.body.email}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      user = data;
      exists = true;
    }
  });
  if (exists) {

  } else {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.company = req.body.company;
    user.phone = req.body.phone;
    user.save((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    });
  }
});

module.exports = router;


