const getAllauthers = require("./get-authers");
const getauther = require("./get-auther");
const createauther = require("./create-auther");
const deleteauther = require("./delete-auther");
const updateauther = require("./update-auther");

module.exports = {
    "/api/auther": {
        ...createauther,
    },
    "/api/auther/{id}": {
        ...getauther,
        ...deleteauther,
        ...updateauther,
    },
    "/api/auther/all": {
        ...getAllauthers,
    },
};
