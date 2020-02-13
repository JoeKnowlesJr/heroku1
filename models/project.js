const mongoose = require("mongoose");

// My Project Schema
const ProjectSchema = mongoose.Schema({
    id: {type: String, required: false},
    pType: {type: String, required: true},
    projectName: {type: String, required: true},
    description: {type: String, required: true},
    githubUrl: {type: String, required: false},
    created: {type: Date, required: false},
    updated: {type: Date, required: false}
}, {timestamps: true});

module.exports = mongoose.model('Project', ProjectSchema);
