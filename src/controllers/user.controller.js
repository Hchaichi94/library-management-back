const User = require("../models/user");
const bcrypt = require("bcryptjs");

const userController = {
    create: async (req, res) => {
        try {
            const { first_name, last_name, email, password } = req.body;

            if (!(email && password && first_name && last_name)) return res.status(406).end();

            const oldUser = await User.findOne({ email });
            if (oldUser) return res.status(406).end();
            encryptedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({
                first_name,
                last_name,
                email: email.toLowerCase(),
                password: encryptedPassword,
            });

            return res.status(201).send(user);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    update: async (req, res) => {
        try {
            const { first_name, last_name, email, password, role } = req.body;

            if (!(email && password && first_name && last_name && role))
                return res.status(406).end();

            const user = await User.findById(req.params.id);
       
            if (email !== user.email) {
                const oldUser = await User.findOne({ email });
                if (oldUser) return res.status(406).end();
            }

            const updates = Object.keys(req.body);
            updates.forEach((update) => (user[update] = req.body[update]));
            encryptedPassword = await bcrypt.hash(password, 10);
            user.password = encryptedPassword;
         
            user.save();

            return res.status(201).send(user);
        } catch (error) {
            console.log("eeee", error);
            return res.status(500).send(error);
        }
    },
    getAll: async (req, res) => {
        const { offset, limit, type } = req.query;
        try {
            const users = await User.find()
                .select("-password")
                .sort({ createdAt: "desc" })
                .limit(limit)
                .skip(offset);
            return res.status(200).send(users);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    get: async (req, res) => {
        try {
            const user = await User.findById(req.params.id).select("-password");
            return res.status(200).send(user);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    deleteOne: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            return res.status(200).end();
        } catch (error) {
            return res.status(500).send(error);
        }
    },
};

module.exports = userController;
