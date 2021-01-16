// import
const UserDB = require("../models/user.js");

// controller methods
const userController = {
    read: function(request, response){
        UserDB.find(request.query).then( (result) => {
            response.json(result).catch( (error) => {
                response.status(422).json(error);
            })
        });
    },
    create: function(request, response){
        UserDB.create(request.query).then( (result) => {
            response.json(result).catch( (error) => {
                response.status(422).json(error);
            })
        });
    },
    update: function(request, response){
        UserDB.update(request.query).then( (result) => {
            response.json(result).catch( (error) => {
                response.status(422).json(error);
            })
        });
    },
    remove: function(request, response){
        UserDB.remove(request.query).then( (result) => {
            response.json(result).catch( (error) => {
                response.status(422).json(error);
            })
        });
    },

}