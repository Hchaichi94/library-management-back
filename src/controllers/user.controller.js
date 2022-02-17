const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = {
    signup: async (req, res) => {
        try {
           
            res.status(201).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
};

module.exports = userController;
