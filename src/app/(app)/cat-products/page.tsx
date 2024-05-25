import { Suspense } from "react";

import Loading from "@/app/loading";
import CatProductList from "@/components/catProducts/CatProductList";
import { getCatProducts } from "@/lib/api/catProducts/queries";

import { checkAuth } from "@/lib/auth/utils";

export const revalidate = 0;

export default async function CatProductsPage() {
  return (
    <main>
      <div className="relative">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl my-2">Cat Products</h1>
        </div>
        <CatProducts />
      </div>
    </main>
  );
}

const CatProducts = async () => {
  await checkAuth();

  const { catProducts } = await getCatProducts();
  
  return (
    <Suspense fallback={<Loading />}>
      <CatProductList catProducts={catProducts}  />
    </Suspense>
  );
};
