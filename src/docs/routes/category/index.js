const getAllCategories = require("./get-categories");
const getCategory = require("./get-category");
const createCategory = require("./create-category");
const deleteCategory = require("./delete-category");
const updateCategory = require("./update-category");

module.exports = {
    "/api/category": {
        ...createCategory,
    },
    "/api/category/{id}": {
        ...getCategory,
        ...deleteCategory,
        ...updateCategory,
    },
    "/api/category/all": {
        ...getAllCategories,
    },
};
