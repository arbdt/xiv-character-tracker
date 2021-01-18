// this is for the Character DB entry

// imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const classJobSchema = require("./classjob");

// define User Schema
const characterSchema = new Schema({
    charId: {type: Number, require: true},
    charName: {type: String, required: true},
    charServer: {type: String, required: true},
    charPortrait: {type: String},
    charClasses: [classJobSchema],
    achievementCount: {type: Number, default: 0},
    achievementPoints: {type: Number, default: 0},
    minionCount: {type: Number, default: 0},
    mountCount: {type: Number, default: 0},
    dateUpdated: {type: Date, default: Date.now()}
});

// define model
const Character = mongoose.model("Character", characterSchema);

// export
module.exports = {characterSchema, Character};