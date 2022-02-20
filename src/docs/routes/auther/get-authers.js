module.exports = {
    get: {
        tags: ["Auther-resource"],
        description: "Get Authers",
        operationId: "getAuthers",
        security: [
            {
                ApiKeyAuth: [],
            },
        ],
        parameters: [
            {
                name: "offset",
                in: "query",
                type: "integer",
                required: false,
                description:
                    "The number of Authers to skip before starting to collect the result set",
            },
            {
                name: "limit",
                in: "query",
                type: "integer",
                required: false,
                description: "The numbers of Authers to return",
            },
        ],
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
            401: {},
            403: {},
            404: {},
            500: {},
        },
    },
};
