module.exports = {
    post: {
        tags: ["Auther-resource"],
        description: "Create Auther",
        operationId: "CreateAuther",
        security: [
            {
                ApiKeyAuth: [],
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
            201: {
                content: {
                    "application/json": {
                        schema: {
                            items: { $ref: "#/components/schemas/Auther" },
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
