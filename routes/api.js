// imports
const express = require("express");
const router = express.Router();
const {User} = require("../models/user");
const {Character} = require("../models/character");

// ROUTES DEFINITIONS -----

// USER API -----

// get user-related record
router.get("/api/user/:userId", function(request, response){
    let userIdent = request.params.userId;
    User.findOne({userIdentity: userIdent}).then( (result) => {
        response.json(result);
    });
});

// create user-related record if not already exist
router.post("/api/user", function (request, response){
    let newUser = {
        userIdentity: request.body.userId
    };
    User.findOneAndUpdate({userIdentity: request.body.userId},
        newUser,
        {upsert: true, new: true}).then( (result) => {
        response.json(result);
    });
});

// update record (remove a character from user)
router.put("/api/user/characters/remove", function (request, response){
    User.findOneAndUpdate({userIdentity: request.body.userId}, {$pull: {savedCharacters: request.body.charId}}, {new: true}).then( result => {
        response.json(result);
    });
});

// update record (add a character to user)
router.put("/api/user/characters/add", function (request, response){
    User.findOneAndUpdate({userIdentity: request.body.userId}, {$push: {savedCharacters: request.body.charId}}, {new: true}).then( result => {
        response.json(result);
    });
});

// CHARACTER API -----

// get character data (individual, for character sheet)
router.get("/api/character/:characterId", function( request, response){
    let idNum = parseInt(request.params.characterId);
    Character.findOne({charId: idNum}).then( (result) => {
        response.json(result);
    });
});

// get character data (multiple, for user page list)
router.post("/api/user/characters", function (request, response){
    let receivedNums = request.body.data;
    Character.find({charId: receivedNums}).then( (result) => {
        response.json(result);
    });
});

// post new character data to database, or update if already exists
router.post("/api/character", function (request, response){
    // store details for insertion
    let newCharacterDetails = {
        charId: request.body.charId,
        charName: request.body.charName,
        charServer: request.body.charServer,
        charAvatar: request.body.charAvatar,
        charPortrait: request.body.charPortrait,
        charClasses: request.body.charClasses,
        minionCount: request.body.minionCount,
        mountCount: request.body.mountCount,
        dateUpdated: Date.now()
    };

    // run update if exists or insert if not
    Character.findOneAndUpdate(
        {charId: request.body.charId},
        newCharacterDetails,
        {upsert: true, new: true, setDefaultsOnInsert: true}).then( result => {
            response.json(result);
        });
});

// export module
module.exports = router;