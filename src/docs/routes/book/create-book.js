module.exports = {
    post: {
        tags: ["Book-resource"],
        description: "Create Book",
        operationId: "CreateBook",
        security: [
            {
                ApiKeyAuth: [],
            },
        ],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/CreateBookInput",
                    },
                },
            },
        },
        responses: {
            201: {
                content: {
                    "application/json": {
                        schema: {
                            items: { $ref: "#/components/schemas/Book" },
                        },
                    },
                },
            },
            401: {},
            403: {},
            406: {},
            404: {},
            500: {},
        },
    },
};
