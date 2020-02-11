const User = require('../models/user');

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');



// Register Form
router.get('/register', function(req, res){
  console.log('Registering...');
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
      phone:phone
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
            return;
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
  console.log('Getting login form');
  res.render('login');
});

// Login Process
router.post('/login', function(req, res, next){
  const user = {
    email: req.body.email,
    password: req.body.password
  };
  console.log(user);
  passport.authenticate('local', {
    successRedirect:'/list',
    failureRedirect:'/users/login',
    failureFlash: true
  },
      function(err, user, info) {
        console.log('**** inside callback ****');
        console.log(err + '\n');
        console.log(user + '\n');
        console.log(info + '\n');
        if (err) return next(err);
        if (!user) { return res.redirect('login'); }
        req.login(user, function(err) {
          if (err) { return next(err); }
          return res.redirect('/users/list' + user.id);
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

module.exports = router;


