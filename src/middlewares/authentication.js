const jwt = require("jsonwebtoken");

const config = process.env;

const authentication = async (req, res, next) => {
    console.log(" req.headers", req.headers);
    const token = req.headers["jwt-token"];

    if (!token) res.status(401).end();

    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        res.status(401).end();
    }
    return next();
};

module.exports = authentication;
