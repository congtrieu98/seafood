/* eslint-disable @next/next/no-img-element */
'use client'

import AboutUs from "@/components/frontend/components/pages/about-us/aboutUs";
import DliveryPolicy from "@/components/frontend/components/pages/delivery-policy/deliveryPolicy";
import ProdcutStandars from "@/components/frontend/components/pages/product-standars/productStandars";
import ReturnPlicy from "@/components/frontend/components/pages/return-policy/returnPolicy";

interface IParams {
    params: {
        slug: string
    }
}

function PageComponent(params: IParams) {
    const getParam = params?.params?.slug
    console.log("params:", params?.params?.slug)
    return (
        <div className="max-w-screen-xl mx-auto md:px-0 px-4">
            {
                getParam === 'chinh-sach-bao-hanh-va-doi-tra' ?
                    <ReturnPlicy /> :
                    getParam === 'chinh-sach-giao-hang' ?
                        <DliveryPolicy /> :
                        getParam === 'about-us' ?
                            <AboutUs /> :
                            getParam === 'bo-tieu-chuan-cac-san-pham' ?
                                <ProdcutStandars /> : ''
            }
        </div>
    );
}

export default PageComponent;