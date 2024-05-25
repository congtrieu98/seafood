import * as z from "zod"
import { CompleteCatProduct, relatedCatProductSchema, CompleteUser, relatedUserSchema } from "./index"

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  introduce: z.string(),
  price: z.number().int(),
  oldPrice: z.number().int().nullish(),
  discount: z.number().int().nullish(),
  quantity: z.number().int(),
  weight: z.number().int().nullish(),
  country: z.string(),
  unit: z.string(),
  property: z.string(),
  size: z.string(),
  status: z.string(),
  note: z.string().nullish(),
  catProductId: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteProduct extends z.infer<typeof productSchema> {
  catProduct: CompleteCatProduct
  user: CompleteUser
}

/**
 * relatedProductSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedProductSchema: z.ZodSchema<CompleteProduct> = z.lazy(() => productSchema.extend({
  catProduct: relatedCatProductSchema,
  user: relatedUserSchema,
}))
