"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { type Product, CompleteProduct } from "@/lib/db/schema/products";
import Modal from "@/components/shared/Modal";
import { type CatProduct, type CatProductId } from "@/lib/db/schema/catProducts";
import { useOptimisticProducts } from "@/app/(app)/products/useOptimisticProducts";
import { Button } from "@/components/ui/button";
import ProductForm from "./ProductForm";
import { PlusIcon } from "lucide-react";

type TOpenModal = (product?: Product) => void;

export default function ProductList({
  products,
  catProducts,
  catProductId 
}: {
  products: CompleteProduct[];
  catProducts: CatProduct[];
  catProductId?: CatProductId 
}) {
  const { optimisticProducts, addOptimisticProduct } = useOptimisticProducts(
    products,
    catProducts 
  );
  const [open, setOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const openModal = (product?: Product) => {
    setOpen(true);
    product ? setActiveProduct(product) : setActiveProduct(null);
  };
  const closeModal = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        setOpen={setOpen}
        title={activeProduct ? "Edit Product" : "Create Product"}
      >
        <ProductForm
          product={activeProduct}
          addOptimistic={addOptimisticProduct}
          openModal={openModal}
          closeModal={closeModal}
          catProducts={catProducts}
        catProductId={catProductId}
        />
      </Modal>
      <div className="absolute right-0 top-0 ">
        <Button onClick={() => openModal()} variant={"outline"}>
          +
        </Button>
      </div>
      {optimisticProducts.length === 0 ? (
        <EmptyState openModal={openModal} />
      ) : (
        <ul>
          {optimisticProducts.map((product) => (
            <Product
              product={product}
              key={product.id}
              openModal={openModal}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

const Product = ({
  product,
  openModal,
}: {
  product: CompleteProduct;
  openModal: TOpenModal;
}) => {
  const optimistic = product.id === "optimistic";
  const deleting = product.id === "delete";
  const mutating = optimistic || deleting;
  const pathname = usePathname();
  const basePath = pathname.includes("products")
    ? pathname
    : pathname + "/products/";


  return (
    <li
      className={cn(
        "flex justify-between my-2",
        mutating ? "opacity-30 animate-pulse" : "",
        deleting ? "text-destructive" : "",
      )}
    >
      <div className="w-full">
        <div>{product.name}</div>
      </div>
      <Button variant={"link"} asChild>
        <Link href={ basePath + "/" + product.id }>
          Edit
        </Link>
      </Button>
    </li>
  );
};

const EmptyState = ({ openModal }: { openModal: TOpenModal }) => {
  return (
    <div className="text-center">
      <h3 className="mt-2 text-sm font-semibold text-secondary-foreground">
        No products
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Get started by creating a new product.
      </p>
      <div className="mt-6">
        <Button onClick={() => openModal()}>
          <PlusIcon className="h-4" /> New Products </Button>
      </div>
    </div>
  );
};
