module.exports = {
    delete: {
        tags: ["User-resource"],
        description: "Deleting a User",
        operationId: "deleteUser",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "Deleting a done User",
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
