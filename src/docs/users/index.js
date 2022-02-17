const signup = require("./sign-up");
const signin = require("./sign-in");
module.exports = {
    paths: {
        "/api/auth/signup": {
            ...signup,
        },
        "/api/auth/signin": {
            ...signin,
        },
    },
};
