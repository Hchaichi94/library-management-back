module.exports = {
    put: {
        tags: ["Auther-resource"],
        description: "Update Auther",
        operationId: "updateAuther",
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
                description: "Id of Auther to be updated",
            },
        ],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/CreateAutherInput",
                    },
                },
            },
        },
        responses: {
            200: {
                content: {
                    "application/json": {
                        schema: {
                            items: { $ref: "#/components/schemas/Auther" },
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
