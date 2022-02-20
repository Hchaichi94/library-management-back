const express = require("express");
const router = express.Router();

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const userRoutes = require("./user.route");
const authRoutes = require("./auth.route");
const categoryRoutes = require("./category.route");
const bookRoutes = require("./book.route");
const autherRoutes = require("./auther.route");

router.use("/api/user/", authentication, authorization, userRoutes);
router.use("/api/category/", authentication, categoryRoutes);
router.use("/api/book/", authentication, bookRoutes);
router.use("/api/auther/", authentication, autherRoutes);
router.use("/api/auth/", authRoutes);

router.get("/api", (req, res) => {
    res.send({
        success: true,
    });
});

module.exports = router;
