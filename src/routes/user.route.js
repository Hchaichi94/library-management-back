const router = require("express").Router();

const { getAll, deleteOne, get, create } = require("../controllers/user.controller");

router.post("/", create);
router.get("/all", getAll);
router.get("/:id", get);
router.delete("/:id", deleteOne);

module.exports = router;
