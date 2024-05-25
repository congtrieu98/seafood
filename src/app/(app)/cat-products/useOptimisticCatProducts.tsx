
import { type CatProduct, type CompleteCatProduct } from "@/lib/db/schema/catProducts";
import { OptimisticAction } from "@/lib/utils";
import { useOptimistic } from "react";

export type TAddOptimistic = (action: OptimisticAction<CatProduct>) => void;

export const useOptimisticCatProducts = (
  catProducts: CompleteCatProduct[],
  
) => {
  const [optimisticCatProducts, addOptimisticCatProduct] = useOptimistic(
    catProducts,
    (
      currentState: CompleteCatProduct[],
      action: OptimisticAction<CatProduct>,
    ): CompleteCatProduct[] => {
      const { data } = action;

      

      const optimisticCatProduct = {
        ...data,
        
        id: "optimistic",
      };

      switch (action.action) {
        case "create":
          return currentState.length === 0
            ? [optimisticCatProduct]
            : [...currentState, optimisticCatProduct];
        case "update":
          return currentState.map((item) =>
            item.id === data.id ? { ...item, ...optimisticCatProduct } : item,
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

  return { addOptimisticCatProduct, optimisticCatProducts };
};
