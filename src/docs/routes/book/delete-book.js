module.exports = {
    delete: {
        tags: ["Book-resource"],
        description: "Deleting a caBooktegory",
        operationId: "deleteBook",
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
                description: "Deleting a done Book",
            },
        ],
        responses: {
            200: {},
            401: {},
            403: {},
            404: {},
            500: {},
        },
    },
};
