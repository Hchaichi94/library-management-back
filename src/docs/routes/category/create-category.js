module.exports = {
    post: {
        tags: ["Category-resource"],
        description: "Create Category",
        operationId: "CreateCategory",
        security: [
            {
                ApiKeyAuth: [],
            },
        ],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/CreateCategoryInput",
                    },
                },
            },
        },
        responses: {
            201: {
                content: {
                    "application/json": {
                        schema: {
                            items: { $ref: "#/components/schemas/Category" },
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
