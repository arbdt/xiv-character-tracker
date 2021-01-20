// imports
const express = require("express");
const router = express.Router();
const {User} = require("../models/user");
const characterController = require("../controllers/characterController");
const {Character} = require("../models/character");

// ROUTES DEFINITIONS -----

// USER API -----

// get user-related records
router.get("/api/user/:userId", function(request, response){
    let userIdent = request.params.userId;
    User.findOne({userIdentity: userIdent}).then( (result) => {
        response.json(result);
    });
});

// create user-related records

// update records

// delete records

// CHARACTER API -----

// get character data
router.get("/api/character/:characterId", function( request, response){
    let idNum = parseInt(request.params.characterId);
    Character.findOne({charId: idNum}).then( (result) => {
        response.json(result);
    });
});

// get character data subset for user page list
router.get("/api/user/character/:characterId", function (request, response){
    let idNum = parseInt(request.params.characterId);
    Character.find({charId: idNum}).then( (result) => {
        if (result !== null){
            let charSubset = {
                charAvatar: result.charPortrait,
                charId: result.charId,
                charName: result.charName,
                charServer: result.charServer
            }
            response.json(charSubset);
        }
    });
});

// post new character data
router.post("/api/character", function (request, response){
    let newCharacter = {
        charId: request.body.charId,
        charName: request.body.charName,
        charServer: request.body.charServer,
        charAvatar: request.body.charAvatar,
        charClasses: request.body.charClasses,
        minionCount: request.body.minionCount,
        mountCount: request.body.mountCount
    };

    Character.create(newCharacter).then( result => {
        response.json(result);
    });
});

// export module
module.exports = router;