const auth = require("./auth");
const user = require("./user");
const category = require("./category");
const book = require("./book");
const auther = require("./auther");

module.exports = {
    paths: {
        ...auther,
        ...book,
        ...category,
        ...auth,
        ...user,
    },
};
