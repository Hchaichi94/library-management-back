const Category = require("../models/category");

const categoryController = {
    create: async (req, res) => {
        try {
            const { name } = req.body;

            if (!name) return res.status(406).end();

            const oldCategory = await Category.findOne({ name });
            if (oldCategory) return res.status(406).end();

            const category = await Category.create({
                name,
            });

            return res.status(201).send(category);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    update: async (req, res) => {
        try {
            const { name } = req.body;

            if (!name) return res.status(406).end();

            const category = await Category.findById(req.params.id);
            const oldCategory = await Category.findOne({ name });
            if (oldCategory) return res.status(406).end();

            const updates = Object.keys(req.body);
            updates.forEach((update) => (category[update] = req.body[update]));

            category.save();

            return res.status(201).send(category);
        } catch (error) {
            console.log("eeee", error);
            return res.status(500).send(error);
        }
    },
    getAll: async (req, res) => {
        const { offset, limit } = req.query;
        try {
            const categories = await Category.find()
                .sort({ createdAt: "desc" })
                .limit(limit)
                .skip(offset);
            return res.status(200).send(categories);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    get: async (req, res) => {
        try {
            const category = await Category.findById(req.params.id);
            return res.status(200).send(category);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    deleteOne: async (req, res) => {
        try {
            await Category.findByIdAndDelete(req.params.id);
            return res.status(200).end();
        } catch (error) {
            return res.status(500).send(error);
        }
    },
};

module.exports = categoryController;
