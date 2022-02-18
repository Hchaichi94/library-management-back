const getAllUsers = require("./get-users");
const getUser = require("./get-user");
const createUser = require("./create-user");
const deleteUser = require("./delete-user");
const updateUser = require("./update-user");
module.exports = {
    "/api/user": {
        ...createUser,
    },
    "/api/user/{id}": {
        ...getUser,
        ...deleteUser,
        ...updateUser,
    },
    "/api/user/all": {
        ...getAllUsers,
    },
};
