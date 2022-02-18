const getAllBooks = require("./get-books");
const getbook = require("./get-book");
const createbook = require("./create-book");
const deletebook = require("./delete-book");
const updatebook = require("./update-book");

module.exports = {
    "/api/book": {
        ...createbook,
    },
    "/api/book/{id}": {
        ...getbook,
        ...deletebook,
        ...updatebook,
    },
    "/api/book/all": {
        ...getAllBooks,
    },
};
