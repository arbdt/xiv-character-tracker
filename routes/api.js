// imports
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const characterController = require("../controllers/characterController");
const {Character} = require("../models/character");

// ROUTES DEFINITIONS -----

// USER API -----

// get user-related records
router.get("/api/user/:userId", function(request, repsonse){
    User.find();
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

// post new character data
router.post("/api/character/", function (request, response){
    let newCharacter = {
        charId: request.body.charId,
        charName: request.body.charName,
        charServer: request.body.charServer,
        charPortrait: request.body.charPortrait,
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