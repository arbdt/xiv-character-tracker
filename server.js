// set up express server here
// local host must be different from react server (ie not 3000)

// imports
const express = require("express");
const mongoose = require("mongoose");
const routes = require("routes");

// set up express app
const app = express();
const PORT = process.env.PORT || 3003;

// app.use() here
app.use(routes);

// connect to mongo(ose) DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/xivtracker");

// start express server
app.listen(PORT, function(){
    console.log(`Express App listening on port ${PORT}`);
});