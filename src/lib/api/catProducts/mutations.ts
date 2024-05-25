import { db } from "@/lib/db/index";
import { 
  CatProductId, 
  NewCatProductParams,
  UpdateCatProductParams, 
  updateCatProductSchema,
  insertCatProductSchema, 
  catProductIdSchema 
} from "@/lib/db/schema/catProducts";
import { getUserAuth } from "@/lib/auth/utils";

export const createCatProduct = async (catProduct: NewCatProductParams) => {
  const { session } = await getUserAuth();
  const newCatProduct = insertCatProductSchema.parse({ ...catProduct, userId: session?.user.id! });
  try {
    const c = await db.catProduct.create({ data: newCatProduct });
    return { catProduct: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const updateCatProduct = async (id: CatProductId, catProduct: UpdateCatProductParams) => {
  const { session } = await getUserAuth();
  const { id: catProductId } = catProductIdSchema.parse({ id });
  const newCatProduct = updateCatProductSchema.parse({ ...catProduct, userId: session?.user.id! });
  try {
    const c = await db.catProduct.update({ where: { id: catProductId, userId: session?.user.id! }, data: newCatProduct})
    return { catProduct: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const deleteCatProduct = async (id: CatProductId) => {
  const { session } = await getUserAuth();
  const { id: catProductId } = catProductIdSchema.parse({ id });
  try {
    const c = await db.catProduct.delete({ where: { id: catProductId, userId: session?.user.id! }})
    return { catProduct: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

