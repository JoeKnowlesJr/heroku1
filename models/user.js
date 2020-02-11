const mongoose = require("mongoose");

// User Schema
const UserSchema = mongoose.Schema({
    id: {type: String, required: false},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    company: {type: String, required: false},
    phone: {type: String, required: false}
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);

// User.statics.createUser = async function(user) {
//     const User = new this(user);
//     return await User.save(user);
// };
//
// User.statics.deleteUser = async function(user) {
//     const User = new this(user);
//     return User.delete();
// };
//
// User.statics.findByEmail = async function(e) {
//     return await this.find({email: e});
// };
//
// User.statics.listPersons = async function() {
//     return await this.find();
// };
