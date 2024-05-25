"use server";

import { revalidatePath } from "next/cache";
import {
  createCatProduct,
  deleteCatProduct,
  updateCatProduct,
} from "@/lib/api/catProducts/mutations";
import {
  CatProductId,
  NewCatProductParams,
  UpdateCatProductParams,
  catProductIdSchema,
  insertCatProductParams,
  updateCatProductParams,
} from "@/lib/db/schema/catProducts";

const handleErrors = (e: unknown) => {
  const errMsg = "Error, please try again.";
  if (e instanceof Error) return e.message.length > 0 ? e.message : errMsg;
  if (e && typeof e === "object" && "error" in e) {
    const errAsStr = e.error as string;
    return errAsStr.length > 0 ? errAsStr : errMsg;
  }
  return errMsg;
};

const revalidateCatProducts = () => revalidatePath("/cat-products");

export const createCatProductAction = async (input: NewCatProductParams) => {
  try {
    const payload = insertCatProductParams.parse(input);
    await createCatProduct(payload);
    revalidateCatProducts();
  } catch (e) {
    return handleErrors(e);
  }
};

export const updateCatProductAction = async (input: UpdateCatProductParams) => {
  try {
    const payload = updateCatProductParams.parse(input);
    await updateCatProduct(payload.id, payload);
    revalidateCatProducts();
  } catch (e) {
    return handleErrors(e);
  }
};

export const deleteCatProductAction = async (input: CatProductId) => {
  try {
    const payload = catProductIdSchema.parse({ id: input });
    await deleteCatProduct(payload.id);
    revalidateCatProducts();
  } catch (e) {
    return handleErrors(e);
  }
};