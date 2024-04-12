/* eslint-disable @next/next/no-img-element */
'use client'


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselPost = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel responsive={responsive} autoPlay={true}>
            <div className="border rounded-2xl hover:rounded-2xl space-y-3 hover:shadow-lg mr-4">
                <img src="https://file.hstatic.net/1000182631/article/tet2024.seo_3a0ecdc12a39493988c0c34e84132e56_large.jpg" alt="" className="rounded-2xl cursor-pointer" />
                <div className="px-2 ">
                    <div className="text-center text-xl uppercase font-medium pt-2 mb-2 leading-7 cursor-pointer seafood_truncate-2">Hải sản hoàng gia phục vụ tết Hải sản hoàng gia phục vụ tết</div>
                    <div className="text-left seafood_truncate-4">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Unde et porro nostrum facilis
                        consectetur molestiae corporis, aliquid
                        earum fugiat molestias soluta necessitatibus
                        sapiente iusto ea in eius sed...
                    </div>
                    <div className="flex justify-between py-5">
                        <div></div>
                        <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chi tiết</div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className="border rounded-2xl space-y-3 hover:shadow-lg mr-4">
                <img src="https://file.hstatic.net/1000182631/article/tet2024.seo_3a0ecdc12a39493988c0c34e84132e56_large.jpg" alt="" className="rounded-2xl cursor-pointer" />
                <div className="px-2 ">
                    <div className="text-center text-xl uppercase font-medium pt-2 mb-2 leading-7 cursor-pointer seafood_truncate-2">Hải sản hoàng gia phục vụ tết</div>
                    <div className="text-left seafood_truncate-4">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Unde et porro nostrum facilis
                        consectetur molestiae corporis, aliquid
                        earum fugiat molestias soluta necessitatibus
                        sapiente iusto ea in eius sed...
                    </div>
                    <div className="flex justify-between py-5">
                        <div></div>
                        <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chi tiết</div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className="border rounded-2xl space-y-3 hover:shadow-lg mr-4">
                <img src="https://file.hstatic.net/1000182631/article/tet2024.seo_3a0ecdc12a39493988c0c34e84132e56_large.jpg" alt="" className="rounded-2xl cursor-pointer" />
                <div className="px-2 ">
                    <div className="text-center text-xl uppercase font-medium pt-2 mb-2 leading-7 cursor-pointer seafood_truncate-2">Hải sản hoàng gia phục vụ tết</div>
                    <div className="text-left seafood_truncate-4">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Unde et porro nostrum facilis
                        consectetur molestiae corporis...
                    </div>
                    <div className="flex justify-between py-5">
                        <div></div>
                        <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chi tiết</div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className="border rounded-2xl space-y-3 hover:shadow-lg mr-4">
                <img src="https://file.hstatic.net/1000182631/article/tet2024.seo_3a0ecdc12a39493988c0c34e84132e56_large.jpg" alt="" className="rounded-2xl cursor-pointer" />
                <div className="px-2 ">
                    <div className="text-center text-xl uppercase font-medium pt-2 mb-2 leading-7 cursor-pointer seafood_truncate-2">Hải sản hoàng gia phục vụ tết</div>
                    <div className="text-left seafood_truncate-4">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Unde et porro nostrum facilis
                        consectetur molestiae corporis...
                    </div>
                    <div className="flex justify-between py-5">
                        <div></div>
                        <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chi tiết</div>
                        <div></div>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}

export default CarouselPost