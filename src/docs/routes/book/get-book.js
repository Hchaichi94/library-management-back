module.exports = {
    get: {
        tags: ["Book-resource"],
        description: "Get Book",
        operationId: "getBook",
        security: [
            {
                ApiKeyAuth: [],
            },
        ],
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "Get a done Book",
            },
        ],
        responses: {
            200: {
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
            404: {},
            500: {},
        },
    },
};
