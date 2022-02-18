module.exports = {
    put: {
        tags: ["Book-resource"],
        description: "Update Book",
        operationId: "updateBook",
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
                description: "Id of Book to be updated",
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
            200: {
                content: {
                    "application/json": {
                        schema: {
                            items: { $ref: "#/components/schemas/Book" },
                        },
                    },
                },
            },
            406: {},
            401: {},
            403: {},
            404: {},
            500: {},
        },
    },
};
