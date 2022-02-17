const router = require("express").Router();

const { signin, signup } = require("../controllers/auth.controller");

router.post("/signin", signin);
router.post("/signup", signup);

module.exports = router;
