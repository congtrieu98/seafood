import * as z from "zod"
import { CompleteUser, relatedUserSchema, CompleteProduct, relatedProductSchema } from "./index"

export const catProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteCatProduct extends z.infer<typeof catProductSchema> {
  user: CompleteUser
  Product: CompleteProduct[]
}

/**
 * relatedCatProductSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedCatProductSchema: z.ZodSchema<CompleteCatProduct> = z.lazy(() => catProductSchema.extend({
  user: relatedUserSchema,
  Product: relatedProductSchema.array(),
}))
