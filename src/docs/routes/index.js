const auth = require("./auth");
const user = require("./user");
const category = require("./category");

module.exports = {
    paths: {
        ...category,
        ...auth,
        ...user,
    },
};
