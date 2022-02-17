const mongoose = require("mongoose");

const Role = ["admin", "employee"];
const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        role: {
            type: String,
            enum: Role,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
