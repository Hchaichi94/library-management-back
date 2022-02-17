module.exports = {
    post: {
        tags: ["Authentication-resource"],
        description: "User SignIn",
        operationId: "User SignIn",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/SignInInput",
                    },
                },
            },
        },
        responses: {
            201: {},
            404: {},
            406: {},
            500: {},
        },
    },
};
