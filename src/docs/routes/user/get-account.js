module.exports = {
    get: {
        tags: ["User-resource"],
        description: "Get User",
        operationId: "getUser",
        security: [
            {
                ApiKeyAuth: [],
            },
        ],
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
