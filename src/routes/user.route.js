const router = require("express").Router();

const { getAll, deleteOne } = require("../controllers/user.controller");

router.get("/", getAll);
router.delete("/:id", deleteOne);

module.exports = router;
