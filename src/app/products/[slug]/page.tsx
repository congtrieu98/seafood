import BestSalesComponent from "@/components/frontend/components/products/bestSales/bestSales";
import ImportedProducts from "@/components/frontend/components/products/importedProduct/iportedProdcuts";
import ProductComponent from "@/components/frontend/components/products/prodcuts/product";

interface IParams {
    params: {
        slug: string
    }
}

function ProductBySlug(params: IParams) {
    const getParam = params?.params?.slug
    console.log("params:", params?.params?.slug)

    return (
        <div className="max-w-screen-xl mx-auto px-4">
            {
                getParam === 'ban-chay-nhat' ?
                    <BestSalesComponent /> :
                    getParam === 'san-pham-nhap-khau' ?
                        <ImportedProducts /> :
                        <ProductComponent />
            }
        </div>
    );
}

export default ProductBySlug;