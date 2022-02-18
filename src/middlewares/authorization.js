const authorization = async (req, res, next) => {
    const { role } = req.user;
    console.log("gdfdfdf",role);
    if (role !== "admin") return res.status(403).send();

    next();
};

module.exports = authorization;
