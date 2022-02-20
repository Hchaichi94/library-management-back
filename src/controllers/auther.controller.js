const Auther = require("../models/auther");

const autherController = {
    create: async (req, res) => {
        try {
            const { first_name, last_name, age, country } = req.body;

            if (!(first_name && last_name && age && country)) res.status(406).end();

            const auther = await Auther.create({
                ...req.body,
            });

            return res.status(200).send(auther);
        } catch (error) {
            console.log('ee',error)
            return res.status(500).send(error);
        }
    },
    update: async (req, res) => {
        try {
            const { first_name, last_name, age, country } = req.body;

            if (!(first_name && last_name && age && country)) res.status(406).end();

            const auther = await Auther.findById(req.params.id);
            if (!auther) return res.status(406).end();

            const updates = Object.keys(req.body);
            updates.forEach((update) => (auther[update] = req.body[update]));

            auther.save();

            return res.status(201).send();
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    getAll: async (req, res) => {
        const { offset, limit } = req.query;
        try {
            const authers = await Auther.find()
                .sort({ createdAt: "desc" })
                .limit(limit)
                .skip(offset);
            return res.status(200).send(authers);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    get: async (req, res) => {
        try {
            const auther = await Auther.findById(req.params.id);
            return res.status(200).send(auther);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    deleteOne: async (req, res) => {
        try {
            await Auther.findByIdAndDelete(req.params.id);
            return res.status(200).end();
        } catch (error) {
            return res.status(500).send(error);
        }
    },
};

module.exports = autherController;
