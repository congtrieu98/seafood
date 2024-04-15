import BestSalesComponent from "@/components/frontend/components/category/bestSales/bestSales";
import ProductComponent from "@/components/frontend/components/category/categories/categories";
import ImportedProducts from "@/components/frontend/components/category/importedProducts/iportedProducts";


interface IParams {
    params: {
        slug: string
    }
}

function CategoryBySlug(params: IParams) {
    const getParam = params?.params?.slug
    // console.log("params:", params?.params?.slug)

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

export default CategoryBySlug;