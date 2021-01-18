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
router.get("/api/character/:charcterId", function( request, response){
    characterController.read()

});

// post new character data
router.post("/api/character/:characterId", function (request, response){
    let newCharacter = {
        
    }
    Character.create()
});