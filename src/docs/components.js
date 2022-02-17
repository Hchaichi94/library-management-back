module.exports = {
    components: {
        schemas: {
            id: {
                type: "string",
                description: "An id of a notification",
                example: "1d956995-bfeb-4381-b8a7-e6fc5ed45fc2",
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
            Error: {
                type: "object",
                properties: {
                    internal_code: {
                        type: "number",
                    },
                },
            },
        },
    },
};