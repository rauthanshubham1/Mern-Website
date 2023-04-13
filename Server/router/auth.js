const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
require("../db/conn");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");
router.use(cookieParser());
router.get("/", (req, res) => {
    res.send("Welcome to home page")
})


router.get("/about", authenticate, (req, res) => {
    res.send(req.rootUser);
})

router.post("/contact", authenticate, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        if (!name || !email || !phone || !message) {
            return res.json({ error: "Please enter all details." });
        }
        console.log(req.body);
        console.log(req.userId);
        const userContact = await User.findOne({ _id: req.userId });

        if (userContact) {
            const userMessage = await userContact.addMessage(name, email, phone, message);
            userContact.save();
            res.status(201).json({ message: userMessage });
        }

    } catch (error) {
        console.log(error);
    }
})

router.post("/register", async (req, res) => {
    const { name, email, phone, work, password, confirmPassword } = req.body;

    if (!name || !email || !phone || !work || !password || !confirmPassword) {
        return res.status(422).json({ "error": "Please fill all the fields" });
    }

    try {
        const userExist1 = await User.findOne({ email: email });
        if (userExist1) {
            return res.status(422).json({ "error": "Email already exists" });
        }
        const userExist2 = await User.findOne({ phone: phone });
        if (userExist2) {
            return res.status(422).json({ "error": "PhoneNumber already exists" });
        }
        if (password !== confirmPassword) {
            return res.status(422).json({ "error": "Password doesn't match with confirmed password" });
        }
        const user = new User({
            name, email, phone, work, password, confirmPassword
        })
        await user.save();
        res.status(201).json({ "message": "User registered successfully" });
    } catch (err) {
        console.log(err);
    }
})



router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ "error": "Please fill all the fields" });
        }

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            const checkPassword = await bcrypt.compare(password, userExist.password);
            if (checkPassword) {
                const token = await userExist.generateAuthToken();
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 60000),
                    httpOnly: true
                })

                res.json({ "Message": "Logged in" });
            } else {
                res.json({ "Message": "Invalid Credentials" });
            }
        } else {
            res.json("User does not exist");
        }
    } catch (err) {
        console.log(err);
    }
})

// Get user data for home and aboutyou page
router.get('/getData', authenticate, (req, res) => {
    res.send(req.rootUser);
});


module.exports = router;