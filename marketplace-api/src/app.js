//Requerimientos
const express = require('express');
const app = express();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
//  Mongoose
const mongoose = require('mongoose');

mongoose.connect(
    MONGO_URI,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

mongoose.set('debug', true);

//  Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  Models
require('./models/Catalog');
require('./models/Product');
require('./models/Purchase');
require('./models/Review');
require('./models/User');

//  Passport
require('./config/passport');

//  Routes
app.use("/api/v1", require("./routes"));

//  Start the server
app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
});

// SEED

const seed = require("../fakeseed.js");
// seed();
