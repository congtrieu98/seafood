import * as z from "zod"
import { CompleteAccount, relatedAccountSchema, CompleteSession, relatedSessionSchema, CompletePage, relatedPageSchema, CompletePageLink, relatedPageLinkSchema, CompleteCatProduct, relatedCatProductSchema, CompleteProduct, relatedProductSchema } from "./index"

export const userSchema = z.object({
  id: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
})

export interface CompleteUser extends z.infer<typeof userSchema> {
  accounts: CompleteAccount[]
  sessions: CompleteSession[]
  pages: CompletePage[]
  pageLinks: CompletePageLink[]
  catProducts: CompleteCatProduct[]
  Product: CompleteProduct[]
}

/**
 * relatedUserSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedUserSchema: z.ZodSchema<CompleteUser> = z.lazy(() => userSchema.extend({
  accounts: relatedAccountSchema.array(),
  sessions: relatedSessionSchema.array(),
  pages: relatedPageSchema.array(),
  pageLinks: relatedPageLinkSchema.array(),
  catProducts: relatedCatProductSchema.array(),
  Product: relatedProductSchema.array(),
}))
