import { Suspense } from "react";

import Loading from "@/app/loading";
import CatProductList from "@/components/catProducts/CatProductList";
import { getCatProducts } from "@/lib/api/catProducts/queries";

import { checkAuth } from "@/lib/auth/utils";

export const revalidate = 0;

export default async function CatProductsPage() {
  return (
    <CatProducts />
  );
}

const CatProducts = async () => {
  await checkAuth();

  const { catProducts } = await getCatProducts();

  return (
    <Suspense fallback={<Loading />}>
      <CatProductList catProducts={catProducts} />
    </Suspense>
  );
};
