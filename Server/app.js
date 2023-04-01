const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT;

dotenv.config({ path: "./config.env" });
require("./db/conn");

// Routing
app.get("/", (req, res) => {
    res.send("Welcome to home page")
})
app.get("/aboutme", (req, res) => {
    res.send("Welcome to aboutme")
})
app.get("/login", (req, res) => {
    res.send("Welcome to login")
})
app.get("/signup", (req, res) => {
    res.send("Welcome to signup")
})
app.get("/contactus", (req, res) => {
    res.send("Welcome to contactus")
})

app.listen(PORT, () => {
    console.log(`Listening to port $PORT}`);
})