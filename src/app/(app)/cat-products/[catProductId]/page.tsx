import { Suspense } from "react";
import { notFound } from "next/navigation";

import { getCatProductByIdWithProducts } from "@/lib/api/catProducts/queries";
import OptimisticCatProduct from "./OptimisticCatProduct";
import { checkAuth } from "@/lib/auth/utils";
import ProductList from "@/components/products/ProductList";

import { BackButton } from "@/components/shared/BackButton";
import Loading from "@/app/loading";


export const revalidate = 0;

export default async function CatProductPage({
  params,
}: {
  params: { catProductId: string };
}) {

  return (
    <main className="overflow-auto">
      <CatProduct id={params.catProductId} />
    </main>
  );
}

const CatProduct = async ({ id }: { id: string }) => {
  await checkAuth();

  const { catProduct, products } = await getCatProductByIdWithProducts(id);
  

  if (!catProduct) notFound();
  return (
    <Suspense fallback={<Loading />}>
      <div className="relative">
        <BackButton currentResource="cat-products" />
        <OptimisticCatProduct catProduct={catProduct}  />
      </div>
      <div className="relative mt-8 mx-4">
        <h3 className="text-xl font-medium mb-4">{catProduct.name}&apos;s Products</h3>
        <ProductList
          catProducts={[]}
          catProductId={catProduct.id}
          products={products}
        />
      </div>
    </Suspense>
  );
};
