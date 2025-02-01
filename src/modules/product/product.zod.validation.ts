import { z } from "zod";

// const authorValidationSchema = z.object({
//   firstName: z.string().max(100, "First Name cannot be more 20 characters"),
//   middleName: z.string().optional(),
//   lastName: z.string().max(100, "Last Name cannot be more 20 characters"),
// });

const productValidationSchema = z.object({
  title: z.string().max(200, "Title cannot be more than 200 characters"),
  author: z.string(),
  price: z.number().min(0, "Price must be positive"),
  category: z.enum([
    "Fiction",
    "Science",
    "SelfDevelopment",
    "Poetry",
    "Religious",
  ]),
  description: z.string().optional(),
  quantity: z.number().min(0, "Quantity cannot be negative"),
  inStock: z.boolean(),
  // createdAt: z.date().optional(),
  // updatedAt: z.date().optional(),
});

export default productValidationSchema;
