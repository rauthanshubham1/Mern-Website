const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 8000;
// const User = require("./models/userSchema");

dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(express.json());
app.use(require("./router/auth"));

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})