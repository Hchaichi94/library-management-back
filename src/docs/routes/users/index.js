const getAll = require("./get-users");
const deleteUser = require("./delete-user");

module.exports = {
    "/api/user": {
        ...getAll,
        ...deleteUser,
    },
};
