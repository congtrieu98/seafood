"use client";

import { useOptimistic, useState } from "react";
import { TAddOptimistic } from "@/app/(app)/cat-products/useOptimisticCatProducts";
import { type CatProduct } from "@/lib/db/schema/catProducts";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Modal from "@/components/shared/Modal";
import CatProductForm from "@/components/catProducts/CatProductForm";


export default function OptimisticCatProduct({ 
  catProduct,
   
}: { 
  catProduct: CatProduct; 
  
  
}) {
  const [open, setOpen] = useState(false);
  const openModal = (_?: CatProduct) => {
    setOpen(true);
  };
  const closeModal = () => setOpen(false);
  const [optimisticCatProduct, setOptimisticCatProduct] = useOptimistic(catProduct);
  const updateCatProduct: TAddOptimistic = (input) =>
    setOptimisticCatProduct({ ...input.data });

  return (
    <div className="m-4">
      <Modal open={open} setOpen={setOpen}>
        <CatProductForm
          catProduct={optimisticCatProduct}
          
          closeModal={closeModal}
          openModal={openModal}
          addOptimistic={updateCatProduct}
        />
      </Modal>
      <div className="flex justify-between items-end mb-4">
        <h1 className="font-semibold text-2xl">{optimisticCatProduct.name}</h1>
        <Button className="" onClick={() => setOpen(true)}>
          Edit
        </Button>
      </div>
      <pre
        className={cn(
          "bg-secondary p-4 rounded-lg break-all text-wrap",
          optimisticCatProduct.id === "optimistic" ? "animate-pulse" : "",
        )}
      >
        {JSON.stringify(optimisticCatProduct, null, 2)}
      </pre>
    </div>
  );
}
