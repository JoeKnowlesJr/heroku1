const mongoose = require("mongoose");

// LogRecord Schema
const LogRecordSchema = mongoose.Schema({
    entry: {type: String, required: true}
}, {timestamps: true});

module.exports = mongoose.model('LogRecord', LogRecordSchema);
