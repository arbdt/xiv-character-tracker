// set up express server here
// local host must be different from react server (ie not 3000)

// imports
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");

// set up express app
const app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.use() here
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

// connect to mongo(ose) DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/xivtracker", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// start express server
app.listen(PORT, function(){
    console.log(`Express App listening on port ${PORT}`);
});