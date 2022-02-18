module.exports = {
    get: {
        tags: ["Book-resource"],
        description: "Get Books",
        operationId: "getBooks",
        security: [
            {
                ApiKeyAuth: [],
            },
        ],
        parameters: [
            {
                name: "offset",
                in: "query",
                type: "integer",
                required: false,
                description:
                    "The number of Books to skip before starting to collect the result set",
            },
            {
                name: "limit",
                in: "query",
                type: "integer",
                required: false,
                description: "The numbers of Books to return",
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
