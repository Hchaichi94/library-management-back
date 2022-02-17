const router = require("express").Router();

const { getAll } = require("../controllers/user.controller");

router.get("/", getAll);
//router.post("/signup", signup);

module.exports = router;
