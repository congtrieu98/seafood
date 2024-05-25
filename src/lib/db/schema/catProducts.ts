import { catProductSchema } from "@/zodAutoGenSchemas";
import { z } from "zod";
import { timestamps } from "@/lib/utils";
import { getCatProducts } from "@/lib/api/catProducts/queries";


// Schema for catProducts - used to validate API requests
const baseSchema = catProductSchema.omit(timestamps)

export const insertCatProductSchema = baseSchema.omit({ id: true });
export const insertCatProductParams = baseSchema.extend({}).omit({ 
  id: true,
  userId: true
});

export const updateCatProductSchema = baseSchema;
export const updateCatProductParams = updateCatProductSchema.extend({}).omit({ 
  userId: true
});
export const catProductIdSchema = baseSchema.pick({ id: true });

// Types for catProducts - used to type API request params and within Components
export type CatProduct = z.infer<typeof catProductSchema>;
export type NewCatProduct = z.infer<typeof insertCatProductSchema>;
export type NewCatProductParams = z.infer<typeof insertCatProductParams>;
export type UpdateCatProductParams = z.infer<typeof updateCatProductParams>;
export type CatProductId = z.infer<typeof catProductIdSchema>["id"];
    
// this type infers the return from getCatProducts() - meaning it will include any joins
export type CompleteCatProduct = Awaited<ReturnType<typeof getCatProducts>>["catProducts"][number];

