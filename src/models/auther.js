const mongoose = require("mongoose");

const AutherSchema = new mongoose.Schema(
    {
        first_name: { type: String },
        last_name: { type: String },
        age: { type: Number },
        country: { type: String },
    },
    { timestamps: true }
);

const Auther = mongoose.model("Auther", AutherSchema);

module.exports = Auther;
