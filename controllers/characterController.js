// import
const CharacterDB = require("../models/character.js");

// controller methods
const characterController = {
    read: function(request, response){
        CharacterDB.find(request.query).then( (result) => {
            response.json(result).catch( (error) => {
                response.status(422).json(error);
            })
        });
    },
    create: function(request, response){
        CharacterDB.create(request.query).then( (result) => {
            response.json(result).catch( (error) => {
                response.status(422).json(error);
            })
        });
    },
    update: function(request, response){
        CharacterDB.updateOne(request.query).then( (result) => {
            response.json(result).catch( (error) => {
                response.status(422).json(error);
            })
        });
    },
    remove: function(request, response){
        CharacterDB.remove(request.query).then( (result) => {
            response.json(result).catch( (error) => {
                response.status(422).json(error);
            })
        });
    },

}

module.exports = characterController;