const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new mongoose.Schema(
    {
        title: { type: String, unique: true },
        auther: { type: String },
        pages: { type: Number },
        price: { type: Number },
        quantity: { type: Number },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
        },
    },
    { timestamps: true }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
