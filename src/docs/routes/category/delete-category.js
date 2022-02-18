module.exports = {
    delete: {
        tags: ["Category-resource"],
        description: "Deleting a category",
        operationId: "deleteCategory",
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
                description: "Deleting a done category",
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
