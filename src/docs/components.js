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
            Auther: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        description: "Auther's identification number",
                        example: "1d956995-bfeb-4381-b8a7-e6fc5ed45fc2",
                    },
                    first_name: {
                        type: "string",
                        description: "Auther's first_name",
                        example: "akrem",
                    },
                    last_name: {
                        type: "string",
                        description: "Auther's first_name",
                        example: "hchaichi",
                    },
                    age: {
                        type: "number",
                        description: "Auther's age",
                        example: 56,
                    },
                    country: {
                        type: "string",
                        description: "Auther's country",
                        example: "tunisia",
                    },
                },
            },
            Book: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        description: "Book's identification number",
                        example: "1d956995-bfeb-4381-b8a7-e6fc5ed45fc2",
                    },
                    title: {
                        type: "string",
                        description: "Book's title",
                        example: "new sport",
                    },
                    auther: {
                        type: "string",
                        description: "Book's auther",
                        example: "sport",
                    },
                    pages: {
                        type: "number",
                        description: "Book's pages",
                        example: 56,
                    },
                    price: {
                        type: "number",
                        description: "Book's price",
                        example: 1.25,
                    },
                    quantity: {
                        type: "number",
                        description: "Book's quantity",
                        example: 12,
                    },
                    category: {
                        type: "string",
                        description: "Book's category",
                        example: "620f9fc1be8b8896c50f04ce",
                    },
                },
            },
            CreateAutherInput: {
                type: "object",
                properties: {
                    first_name: {
                        type: "string",
                        description: "Auther's first_name",
                        example: "akrem",
                    },
                    last_name: {
                        type: "string",
                        description: "Auther's first_name",
                        example: "hchaichi",
                    },
                    age: {
                        type: "number",
                        description: "Auther's age",
                        example: 56,
                    },
                    country: {
                        type: "string",
                        description: "Auther's country",
                        example: "tunisia",
                    },
                },
            },
            CreateBookInput: {
                type: "object",
                properties: {
                    title: {
                        type: "string",
                        description: "Book's title",
                        example: "new sport",
                    },
                    autherId: {
                        type: "string",
                        description: "Book's auther id",
                        example: "620f9fc1be8b8896c50f04ce",
                    },
                    pages: {
                        type: "number",
                        description: "Book's pages",
                        example: 56,
                    },
                    price: {
                        type: "number",
                        description: "Book's price",
                        example: 1.25,
                    },
                    quantity: {
                        type: "number",
                        description: "Book's quantity",
                        example: 12,
                    },
                    categoryId: {
                        type: "string",
                        description: "Book's category id",
                        example: "620f9fc1be8b8896c50f04ce",
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
