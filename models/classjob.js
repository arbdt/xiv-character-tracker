// this is for the ClassJob DB entry

// imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define User Schema
const classJobSchema = new Schema({
    className: {type: String},
    classLevel: {type: Number},
    currentExp: {type: Number},
    maxExp: {type: Number}
});

// export
module.exports = classJobSchema;