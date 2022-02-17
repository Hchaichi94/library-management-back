const getAll = require("./get-users");

module.exports = {
    "/api/user": {
        ...getAll,
    },
};
