import { type CatProduct } from "@/lib/db/schema/catProducts";
import { type Product, type CompleteProduct } from "@/lib/db/schema/products";
import { OptimisticAction } from "@/lib/utils";
import { useOptimistic } from "react";

export type TAddOptimistic = (action: OptimisticAction<Product>) => void;

export const useOptimisticProducts = (
  products: CompleteProduct[],
  catProducts: CatProduct[]
) => {
  const [optimisticProducts, addOptimisticProduct] = useOptimistic(
    products,
    (
      currentState: CompleteProduct[],
      action: OptimisticAction<Product>,
    ): CompleteProduct[] => {
      const { data } = action;

      const optimisticCatProduct = catProducts.find(
        (catProduct) => catProduct.id === data.catProductId,
      )!;

      const optimisticProduct = {
        ...data,
        catProduct: optimisticCatProduct,
        id: "optimistic",
      };

      switch (action.action) {
        case "create":
          // @ts-ignore
          return currentState.length === 0
            ? [optimisticProduct]
            : [...currentState, optimisticProduct];
        case "update":
          return currentState.map((item) =>
            item.id === data.id ? { ...item, ...optimisticProduct } : item,
          );
        case "delete":
          return currentState.map((item) =>
            item.id === data.id ? { ...item, id: "delete" } : item,
          );
        default:
          return currentState;
      }
    },
  );

  return { addOptimisticProduct, optimisticProducts };
};
