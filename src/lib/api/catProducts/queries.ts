import { db } from "@/lib/db/index";
import { getUserAuth } from "@/lib/auth/utils";
import { type CatProductId, catProductIdSchema } from "@/lib/db/schema/catProducts";

export const getCatProducts = async () => {
  const { session } = await getUserAuth();
  const c = await db.catProduct.findMany({ where: { userId: session?.user.id! } });
  return { catProducts: c };
};

export const getCatProductById = async (id: CatProductId) => {
  const { session } = await getUserAuth();
  const { id: catProductId } = catProductIdSchema.parse({ id });
  const c = await db.catProduct.findFirst({
    where: { id: catProductId, userId: session?.user.id! }
  });
  return { catProduct: c };
};

export const getCatProductByIdWithProducts = async (id: CatProductId) => {
  const { session } = await getUserAuth();
  const { id: catProductId } = catProductIdSchema.parse({ id });
  const c = await db.catProduct.findFirst({
    where: { id: catProductId, userId: session?.user.id! },
    include: { Product: { include: { catProduct: true } } }
  });
  if (c === null) return { catProduct: null };
  const { Product, ...catProduct } = c;

  return { catProduct, products: Product };
};

