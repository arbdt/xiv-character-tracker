// this is for the Character DB entry

// imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const classJobSchema = require("./classjob");

// define User Schema
const characterSchema = new Schema({
    charName: {type: String, required: true},
    charServer: {type: String, required: true},
    charClasses: [classJobSchema]
});

// export
module.exports = characterSchema;