import { productSchema } from "@/zodAutoGenSchemas";
import { z } from "zod";
import { timestamps } from "@/lib/utils";
import { getProducts } from "@/lib/api/products/queries";


// Schema for products - used to validate API requests
const baseSchema = productSchema.omit(timestamps)

export const insertProductSchema = baseSchema.omit({ id: true });
export const insertProductParams = baseSchema.extend({
  oldPrice: z.coerce.number(),
  discount: z.coerce.number(),
  quantity: z.coerce.number(),
  weight: z.coerce.number(),
  catProductId: z.coerce.string().min(1)
}).omit({ 
  id: true,
  userId: true
});

export const updateProductSchema = baseSchema;
export const updateProductParams = updateProductSchema.extend({
  oldPrice: z.coerce.number(),
  discount: z.coerce.number(),
  quantity: z.coerce.number(),
  weight: z.coerce.number(),
  catProductId: z.coerce.string().min(1)
}).omit({ 
  userId: true
});
export const productIdSchema = baseSchema.pick({ id: true });

// Types for products - used to type API request params and within Components
export type Product = z.infer<typeof productSchema>;
export type NewProduct = z.infer<typeof insertProductSchema>;
export type NewProductParams = z.infer<typeof insertProductParams>;
export type UpdateProductParams = z.infer<typeof updateProductParams>;
export type ProductId = z.infer<typeof productIdSchema>["id"];
    
// this type infers the return from getProducts() - meaning it will include any joins
export type CompleteProduct = Awaited<ReturnType<typeof getProducts>>["products"][number];

