const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

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

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})