import { z } from "zod";

export const productFormSchema = z.object({
  title: z
    .string()
    .min(15, "Title must be at least 15 characters.")
    .max(50, "Title must be at most 50 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(50, "Description must be at most 50 characters."),
  category: z.string({
    required_error: "Please select a category to display.",
  }),
  price: z.coerce.number().min(50),
  imgURL: z.string().url("Please, provide a valid image URL"),
});
