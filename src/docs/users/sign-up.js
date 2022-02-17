module.exports = {
    post: {
        tags: ["Authentication-resource"],
        description: "User SignUp",
        operationId: "User SignUp",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/SignUpInput",
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
