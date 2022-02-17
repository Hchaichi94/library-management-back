const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

const connectDB = () => {
    mongoose.connect(MONGO_URI, (err) => {
        if (err) throw (err, console.log("MongoDB not Connected", err));
    });
    console.log("MongoDB  Connected");
};
module.exports = connectDB;
