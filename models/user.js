// this is for the User DB entry

// imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const characterSchema = require("./character");

// define User Schema
const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    savedCharacter: [characterSchema]
});

// define model
const User = mongoose.model("User", userSchema);

// export
module.exports = User;