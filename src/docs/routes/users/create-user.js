module.exports = {
    post: {
        tags: ["User-resource"],
        description: "Create User",
        operationId: "CreateUser",
        security: [
            {
                ApiKeyAuth: [],
            },
        ],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/CreateUserInput",
                    },
                },
            },
        },
        responses: {
            200: {
                content: {
                    "application/json": {
                        schema: {
                            items: { $ref: "#/components/schemas/User" },
                        },
                    },
                },
            },
            401: {},
            403: {},
            404: {},
            500: {},
        },
    },
};
