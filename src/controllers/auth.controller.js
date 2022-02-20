const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = {
    signup: async (req, res) => {
        try {
            const { first_name, last_name, email, password, role } = req.body;

            if (!(email && password && first_name && last_name && role))
                return res.status(406).end();

            const oldUser = await User.findOne({ email });
            if (oldUser) res.status(406).end();
            encryptedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({
                first_name,
                last_name,
                email: email.toLowerCase(),
                password: encryptedPassword,
                role,
            });

            const { _id } = user;

            const token = jwt.sign({ user_id: _id, email, role }, process.env.TOKEN_KEY, {
                expiresIn: "7d",
            });

            return res.status(201).send({ user_id: _id, role, token });
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    signin: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!(email && password)) return res.status(406).end();

            const user = await User.findOne({ email });
            if (!user) res.status(406).end();

            const validePassword = await bcrypt.compare(password, user.password);
            if (!validePassword) res.status(406).end();

            const { _id, role } = user;
            const token = jwt.sign({ user_id: _id, email, role }, process.env.TOKEN_KEY, {
                expiresIn: "7d",
            });

            return res.status(201).send({ user_id: _id, role, token });
        } catch (error) {
            return res.status(500).send(error);
        }
    },
};

module.exports = userController;
