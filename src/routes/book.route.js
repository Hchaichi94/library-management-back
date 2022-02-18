const router = require("express").Router();

const { getAll, deleteOne, get, create, update } = require("../controllers/book.controller");

router.post("/", create);
router.put("/:id", update);
router.get("/all", getAll);
router.get("/:id", get);
router.delete("/:id", deleteOne);

module.exports = router;
