import { z } from "zod";


const authorValidationSchema = z.object({
    firstName: z.string()
        .min(1, { message: "First Name is required" })
        .max(100, { message: "First name cannot be more than 100 characters" })
        .refine(value => {
            const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
            return firstNameStr === value;
        }, { message: "First name must start with a capital letter" }),

    middleName: z.string()
        .max(100, { message: "Middle name cannot be more than 100 characters" })
        .optional(),

    lastName: z.string()
        .min(1, { message: "Last Name is required" })
        .max(100, { message: "Last name cannot be more than 100 characters" })
        .refine(value => {
            const lastNameStr = value.charAt(0).toUpperCase() + value.slice(1);
            return lastNameStr === value;
        }, { message: "Last name must start with a capital letter" })
});


const productValidationSchema = z.object({
    title: z.string()
        .min(1, { message: "Product title is required" })
        .max(200, { message: "Title cannot exceed 200 characters" }),

    author: authorValidationSchema,

    price: z.number()
        .min(0, { message: "Price must be a positive value" }),

    category: z.enum(["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"], {
        errorMap: () => ({ message: "Category must be one of Fiction, Science, SelfDevelopment, Poetry, or Religious" })
    }),

    description: z.string()
        .max(1000, { message: "Description cannot exceed 1000 characters" })
        .optional(),

    quantity: z.number()
        .min(0, { message: "Quantity must be at least 0" }),

    inStock: z.boolean()
});

export default productValidationSchema;


