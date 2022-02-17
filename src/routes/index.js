const express = require("express");
const router = express.Router();

const authentication = require("../middlewares/authentication");

const userRoutes = require("./user.route");
const authRoutes = require("./auth.route");

router.use("/api/user/", authentication, userRoutes);
router.use("/api/auth/", authRoutes);

router.get("/api", (req, res) => {
    res.send({
        success: true,
    });
});

module.exports = router;
