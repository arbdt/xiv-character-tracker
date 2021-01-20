// this is for the ClassJob DB entry

// imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define User Schema
const ClassJobSchema = new Schema({
    charId: Number,
    classjobName: String,
    classjobLevel: {type: Number, default: 0},
    currentExp: {type: Number, default: 0},
    maxExp: {type: Number, default: 0}
});

// export
module.exports = ClassJobSchema;