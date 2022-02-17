const express = require("express");
const router = express.Router();

const userRoutes = require("./user.route");

router.use("/api/user/", userRoutes);

router.get("/api", (req, res) => {
    res.send({
        success: true,
    });
});

module.exports = router;
