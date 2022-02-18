module.exports = {
    put: {
        tags: ["User-resource"],
        description: "Update User",
        operationId: "updateUser",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "Id of User to be updated",
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
