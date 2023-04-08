const jwt = require("jsonwebtoken");
const User = require("../models/userSchema")

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({ _id: verifyToken._id, "token:token": token });

        if (!rootUser) { throw new Error("User not found"); }

        req.token = token;
        req.rootUser = rootUser;
    } catch (err) {
        res.status(401).send("Unauthorized: No token provided")
    }

}

module.exports = authenticate;