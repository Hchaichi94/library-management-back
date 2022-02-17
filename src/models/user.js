const mongoose = require("mongoose");

const Role = ["admin", "employee"];
const UserSchema = new mongoose.Schema(
    {
        first_name: { type: String, default: null },
        last_name: { type: String, default: null },
        email: { type: String, unique: true },
        password: { type: String },
        token: { type: String },
        role: { type: String, enum: Role, default: "employee" },
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
