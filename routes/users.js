const User = require('../models/user');

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const LogRecord = require('../models/logRecord');



// Register Form
router.get('/register', function(req, res){
  res.render('register');
});

// Register Proccess
router.post('/register', function(req, res){
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const password2 = req.body.password;
  const company = req.body.company;
  const phone = req.body.phone;

  req.checkBody('firstName', 'First name is required').notEmpty();
  req.checkBody('lastName', 'Last name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Password confirmation is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  let errors = req.validationErrors();

  if(errors){
    res.render('register', {
      errors:errors
    });
  } else {
    let newUser = new User({
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password,
      company:company,
      phone:phone,
      created: new Date(),
      lastVisit: new Date()
    });

    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(newUser.password, salt, function(err, hash){
        if(err){
          console.log(err);
        }
        newUser.password = hash;
        newUser.save(function(err){
          if(err){
            console.log(err);
          } else {
            req.flash('success','You are now registered and can log in');
            res.redirect('/users/login');
          }
        });
      });
    });
  }
});

// Login Form
router.get('/login', function(req, res){
  res.render('login');
});

// Login Process
router.post('/login', function(req, res, next){
  passport.authenticate('local', {
    successRedirect:'/',
    failureRedirect:'/users/login',
    failureFlash: true
  },
      function(err, user, info) {
        if (err) return next(err);
        if (!user) { return res.status(401).render('login', {
          errors: [{msg: err}]
        }); }
        user.lastVisit = new Date();
        const entry = user.firstName + " " + user.lastName + " " + user.lastVisit;
        const lr = new LogRecord({
            entry: entry
        });
        lr.save((err) => {
          if (err) throw err;
        });
        req.login(user, function(err) {
          if (err) { return next(err); }
          return res.status(200).redirect('/users/list');
        });
      })(req, res, next);
});

// logout
router.get('/logout', function(req, res){
  req.logout();
  req.flash('success', 'You are logged out');
  res.redirect('/users/login');
});

router.get('/list', function(req, res){
  User.find({}, (err, data) => {
    if (err) throw err;
    res.render('userList', {
      users:data
    });
  });
});

router.get('/all', function(req, res){
  User.find({}, (err, data) => {
    if (err) throw err;
    res.status(200).json(data);
  });
});

module.exports = router;


