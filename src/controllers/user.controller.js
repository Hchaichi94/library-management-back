const User = require("../models/user");

const userController = {
    create: async (req, res) => {
        try {
            res.status(201).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
    deleteOne: async (req, res) => {
        try {
            res.status(201).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
    get: async (req, res) => {
        try {
            res.status(201).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getAll: async (req, res) => {
        try {
            res.status(201).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
    update: async (req, res) => {
        try {
            res.status(201).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
};

module.exports = userController;
