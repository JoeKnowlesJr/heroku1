const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = function(passport){
    // Local Strategy
    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        function(email, password, done){
            // Match Email
            let query = {email:email};
            console.log('Query: ' + query);
            User.findOne(query, function(err, user){
                if(err) throw err;
                if(!user){
                    return done(null, true, {message: 'No user found'});
                }

                console.log(password + '\n' + user.password);

                // Match Password
                bcrypt.compare(password, user.password, function(err, isMatch){
                    if(err) throw err;
                    if(isMatch){
                        return done(null, user);
                    } else {
                        return done(null, false, {message: 'Wrong password'});
                    }
                });
            });
        }));

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
};
