// this is for the User DB entry

// imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {CharacterSchema} = require("./character");

// define User Schema
const UserSchema = new Schema({
    userIdentity: {type: String, required: true},
    savedCharacters: [Number]
});

// define model
const User = mongoose.model("User", UserSchema);

// export
module.exports = {User, UserSchema};