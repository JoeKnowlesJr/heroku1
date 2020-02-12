const mongoose = require("mongoose");

// My Project Schema
const ProjectSchema = mongoose.Schema({
    id: {type: String, required: false},
    projectName: {type: String, required: true},
    description: {type: String, required: true},
    githubUrl: {type: String, required: false}
}, {timestamps: true});

module.exports = mongoose.model('Project', ProjectSchema);
