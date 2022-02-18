module.exports = {
    components: {
        schemas: {
            id: {
                type: "string",
                description: "An id of a notification",
                example: "1d956995-bfeb-4381-b8a7-e6fc5ed45fc2",
            },
            role: {
                type: "enum",
                description: "An role of a user",
                enum: ["admin", "employee"],
            },
            User: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        description: "User's identification number",
                        example: "1d956995-bfeb-4381-b8a7-e6fc5ed45fc2",
                    },
                    first_name: {
                        type: "string",
                        description: "User's first_name",
                        example: "akrem",
                    },
                    last_name: {
                        type: "string",
                        description: "User's first_name",
                        example: "hchaichi",
                    },
                    email: {
                        type: "string",
                        description: "User's email",
                        example: "hchaichi-akrem@outlook.fr",
                    },
                    password: {
                        type: "string",
                        description: "User's password",
                        example: "password",
                    },
                    role: {
                        type: "string",
                        description: "User's role",
                        example: "admin",
                    },
                },
            },
            Category: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        description: "Category's identification number",
                        example: "1d956995-bfeb-4381-b8a7-e6fc5ed45fc2",
                    },
                    name: {
                        type: "string",
                        description: "Category's name",
                        example: "sport",
                    },
                },
            },
            CreateCategoryInput: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "Category's name",
                        example: "sport",
                    },
                },
            },
            SignUpInput: {
                type: "object",
                properties: {
                    first_name: {
                        type: "string",
                        description: "User's first_name",
                        example: "akrem",
                    },
                    last_name: {
                        type: "string",
                        description: "User's first_name",
                        example: "hchaichi",
                    },
                    email: {
                        type: "string",
                        description: "User's email",
                        example: "hchaichi-akrem@outlook.fr",
                    },
                    password: {
                        type: "string",
                        description: "User's password",
                        example: "password",
                    },
                },
            },
            SignInInput: {
                type: "object",
                properties: {
                    email: {
                        type: "string",
                        description: "User's email",
                        example: "hchaichi-akrem@outlook.fr",
                    },
                    password: {
                        type: "string",
                        description: "User's password",
                        example: "password",
                    },
                },
            },
            CreateUserInput: {
                type: "object",
                properties: {
                    first_name: {
                        type: "string",
                        description: "User's first_name",
                        example: "akrem",
                    },
                    last_name: {
                        type: "string",
                        description: "User's first_name",
                        example: "hchaichi",
                    },
                    email: {
                        type: "string",
                        description: "User's email",
                        example: "hchaichi-akrem@outlook.fr",
                    },
                    password: {
                        type: "string",
                        description: "User's password",
                        example: "password",
                    },
                    role: {
                        type: "enum",
                        description: "User's type",
                        schema: {
                            $ref: "#/components/schemas/role",
                        },
                        example: "employee",
                    },
                },
            },
            Error: {
                type: "object",
                properties: {
                    internal_code: {
                        type: "number",
                    },
                },
            },
        },
        securitySchemes: {
            ApiKeyAuth: {
                type: "apiKey",
                in: "header",
                name: "jwt-token",
            },
        },
    },
};
