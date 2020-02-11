// const mongoose = require('mongoose');
// const encoder = require('bcrypt');
//
// const UserSchema = new mongoose.Schema({
//     id:         { type: String, required: true },
//     firstName:  { type: String, required: true },
//     lastName:   { type: String, required: true },
//     email:      { type: String, required: true },
//     password:   { type: String, required: true },
//     company:    { type: String, required: false },
//     phone:      { type: String, required: false },
//     token:      { type: String, required: false }
// });

// const User = mongoose.model('User', UserSchema);

// function createUser(user) {
//     return User.create({id: User.size, firstName: user.firstName, lastName: user.lastName, email: user.email, password: encoder.hashSync(user.password, 10), company: user.company, phone: user.phone, token: ''});
// }

// function findByEmail(_email) {
//     User.find({email: _email}).exec((u) => {
//         return u;
//     });
// }
//
// function getUserByEmail(req, res, next) {
//     console.log ("************" + req.user);
//     User.findOne({email: req.user.email}, (err, user) => {
//         if (err || !user) {
//             res.status('400').json({status: 'user-missing'});
//         }
//         req.userDocument = user;
//         next();
//     });
// }

// function getUserById(req, res, next) {
//     console.log ("************" + req.user.id);
//     User.findOne({id: req.user.id}, (err, user) => {
//         if (err || !user) {
//             res.status('400').json({status: 'user-missing'});
//         }
//         req.userDocument = user;
//         next();
//     });
// }
//
// module.exports = { UserSchema, User, createUser, getUserByEmail, getUserById };
