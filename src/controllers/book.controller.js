const Book = require("../models/book");
const Category = require("../models/category");
const Auther = require("../models/auther");

const categoryController = {
    create: async (req, res) => {
        try {
            const { title, autherId, pages, price, quantity, categoryId } = req.body;

            if (!(title && autherId && pages && price && quantity && categoryId))
                res.status(406).end();

            const oldBook = await Book.findOne({ title });
            if (oldBook) return res.status(406).end();

            const category = await Category.findById(categoryId);
            if (!category) return res.status(406).end();

            const auther = await Auther.findById(autherId);
            if (!auther) return res.status(406).end();

            const book = await Book.create({
                title,
                auther,
                pages,
                price,
                quantity,
                category,
            });

            return res.status(201).send(book);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    update: async (req, res) => {
        try {
            const { title, auther, pages, price, quantity, categoryId } = req.body;

            if (!(title && auther && pages && price && quantity && categoryId))
                res.status(406).end();

            const category = await Category.findById(categoryId);
            if (!category) return res.status(406).end();

            const book = await Book.findById(req.params.id);
            if (!book) return res.status(406).end();

            const oldBook = await Book.findOne({ title });
            if (oldBook) return res.status(406).end();

            const updates = Object.keys(req.body);
            updates.forEach((update) => (book[update] = req.body[update]));

            book.save();

            return res.status(200).send();
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    getAll: async (req, res) => {
        const { offset, limit } = req.query;
        try {
            const books = await Book.find()
                .sort({ createdAt: "desc" })
                .limit(limit)
                .skip(offset)
                .populate("category")
                .populate("auther");
            return res.status(200).send(books);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    get: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id).populate("category").populate("auther");
            return res.status(200).send(book);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    deleteOne: async (req, res) => {
        try {
            await Book.findByIdAndDelete(req.params.id);
            return res.status(200).end();
        } catch (error) {
            return res.status(500).send(error);
        }
    },
};

module.exports = categoryController;
