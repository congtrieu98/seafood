"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


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
        title={activeCatProduct ? "Edit CatProduct" : "Create Cat Product"}
      >
        <CatProductForm
          catProduct={activeCatProduct}
          addOptimistic={addOptimisticCatProduct}
          openModal={openModal}
          closeModal={closeModal}

        />
      </Modal>
      {/* <div className="absolute right-5 top-0 ">
        <Button onClick={() => openModal()} variant={"outline"}>
          +
        </Button>
      </div> */}
      {optimisticCatProducts.length === 0 ? (
        <EmptyState openModal={openModal} />
      ) : (
        // <ul>
        //   {optimisticCatProducts.map((catProduct) => (
        //     <CatProduct
        //       catProduct={catProduct}
        //       key={catProduct.id}
        //       openModal={openModal}
        //     />
        //   ))}
        // </ul>
        <CatPro dataCatPro={optimisticCatProducts} openModal={openModal} />
      )}
    </div>
  );
}

// const CatProduct = ({
//   catProduct,
//   openModal,
// }: {
//   catProduct: CompleteCatProduct;
//   openModal: TOpenModal;
// }) => {
//   const optimistic = catProduct.id === "optimistic";
//   const deleting = catProduct.id === "delete";
//   const mutating = optimistic || deleting;
//   const pathname = usePathname();
//   const basePath = pathname.includes("cat-products")
//     ? pathname
//     : pathname + "/cat-products/";


//   return (
//     <li
//       className={cn(
//         "flex justify-between my-2",
//         mutating ? "opacity-30 animate-pulse" : "",
//         deleting ? "text-destructive" : "",
//       )}
//     >
//       <div className="w-full">
//         <div>{catProduct.name}</div>
//       </div>
//       <Button variant={"link"} asChild>
//         <Link href={basePath + "/" + catProduct.id}>
//           Edit
//         </Link>
//       </Button>
//     </li>
//   );
// };

const EmptyState = ({ openModal }: { openModal: TOpenModal }) => {
  return (
    <div className="text-center">
      <h3 className="mt-2 text-sm font-semibold text-secondary-foreground">
        No cat products
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Get started by creating a new cat product.
      </p>
      <div className="mt-6">
        <Button onClick={() => openModal()}>
          <PlusIcon className="h-4" /> New Cat Products </Button>
      </div>
    </div>
  );
};
