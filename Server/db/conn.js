const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Connectiong to Mongodb Atlas
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => { console.log("Connected to atlas") }).catch((err) => {
    console.log("No connection" + err);
});