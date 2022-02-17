const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = {
    getAll: async (req, res) => {
        try {
            const users = await User.find();
            res.status(201).send(users);
        } catch (error) {
            res.status(500).send(error);
        }
    },
};

module.exports = userController;
