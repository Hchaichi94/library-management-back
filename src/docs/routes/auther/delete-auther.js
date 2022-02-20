module.exports = {
    delete: {
        tags: ["Auther-resource"],
        description: "Deleting a Auther",
        operationId: "deleteAuther",
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
                description: "Deleting a done Auther",
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
