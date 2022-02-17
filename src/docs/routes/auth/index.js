const signup = require("./sign-up");
const signin = require("./sign-in");

module.exports = {
    "/api/auth/signup": {
        ...signup,
    },
    "/api/auth/signin": {
        ...signin,
    },
};
