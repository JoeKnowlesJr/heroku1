const mongoose = require("mongoose");

const Users = new mongoose.Schema({
    id: {type: String, required: false},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    company: {type: String, required: false},
    phone: {type: String, required: false}
}, {timestamps: true});

Users.statics.createUser = async function(user) {
    const User = new this(user);
    return await User.save(user);
};

Users.statics.deleteUser = async function(user) {
    const User = new this(user);
    return User.delete();
};

Users.statics.findByEmail = async function(e) {
    return await this.find({email: e});
};

Users.statics.listPersons = async function() {
    return await this.find();
};

// module.exports = mongoose.model('users', Users);
