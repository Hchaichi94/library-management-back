const User = require("../models/user");

const userController = {
    getAll: async (req, res) => {
        try {
            const users = await User.find().select("-password");
            res.status(200).json(users);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    deleteOne: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).end();
        } catch (error) {
            res.status(500).send(error);
        }
    },
};

module.exports = userController;
