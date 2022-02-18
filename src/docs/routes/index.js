const auth = require("./auth");
const user = require("./user");
const category = require("./category");
const book = require("./book");
module.exports = {
    paths: {
        ...book,
        ...category,
        ...auth,
        ...user,
    },
};
