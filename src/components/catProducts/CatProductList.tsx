"use client";

import { useState } from "react";


import { type CatProduct, CompleteCatProduct } from "@/lib/db/schema/catProducts";
import Modal from "@/components/shared/Modal";

import { useOptimisticCatProducts } from "@/app/(app)/cat-products/useOptimisticCatProducts";
import { Button } from "@/components/ui/button";
import CatProductForm from "./CatProductForm";
import { PlusIcon } from "lucide-react";
import CatPro from "./CatPro";

type TOpenModal = (catProduct?: CatProduct) => void;

export default function CatProductList({
  catProducts,

}: {
  catProducts: CompleteCatProduct[];

}) {
  const { optimisticCatProducts, addOptimisticCatProduct } = useOptimisticCatProducts(
    catProducts,

  );
  const [open, setOpen] = useState(false);
  const [activeCatProduct, setActiveCatProduct] = useState<CatProduct | null>(null);
  const openModal = (catProduct?: CatProduct) => {
    setOpen(true);
    catProduct ? setActiveCatProduct(catProduct) : setActiveCatProduct(null);
  };
  const closeModal = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        setOpen={setOpen}
        title="Tạo danh mục mới"
      >
        <CatProductForm
          catProduct={activeCatProduct}
          addOptimistic={addOptimisticCatProduct}
          openModal={openModal}
          closeModal={closeModal}

        />
      </Modal>
      {optimisticCatProducts.length === 0 ? (
        <EmptyState openModal={openModal} />
      ) : (
        <CatPro dataCatPro={optimisticCatProducts} openModal={openModal} />
      )}
    </div>
  );
}

const EmptyState = ({ openModal }: { openModal: TOpenModal }) => {
  return (
    <div className="text-center">
      <h3 className="mt-2 text-sm font-semibold text-secondary-foreground">
        Chưa có danh mục nào
      </h3>
      {/* <p className="mt-1 text-sm text-muted-foreground">
        Get started by creating a new cat product.
      </p> */}
      <div className="mt-6">
        <Button onClick={() => openModal()}>
          <PlusIcon className="h-4" />Tạo mới danh mục </Button>
      </div>
    </div>
  );
};
