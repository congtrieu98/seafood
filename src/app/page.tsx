/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PmwTvNfrVgf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client'
import SidebarCat from "@/components/frontend/components/sidebar/sidebarCat";
import HomeSliderBanner from "@/components/frontend/components/sliderBaner/homeSliderBanner";
import Link from "next/link";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HomePage() {
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
    <div className="flex flex-col min-h-screen">

      {/* section banner */}
      <section className="w-full flex max-w-screen-xl mx-auto">
        <div className="category">
          <SidebarCat />
        </div>

        {/* Slider Banner */}
        <div className="slider w-full">
          <HomeSliderBanner />
          <div className="flex space-x-2 px-4">
            <div>
              <img src="https://theme.hstatic.net/1000182631/1000966139/14/a_top_1.jpg?v=1086" className="rounded-lg" />
            </div>
            <div>
              <img src="https://theme.hstatic.net/1000182631/1000966139/14/a_top_2.jpg?v=1086" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section product content */}
      {/* ====== Bán chạy ===== */}
      <div className="section-best-sales py-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between py-4">
            <Link href={""} >
              <div className="uppercase font-bold text-xl relative after:absolute 
              after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
              hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                bán chạy nhất</div>
            </Link>

            <Link href={""} >
              <div className="text-gray-400 relative after:absolute 
              after:bottom-0 after:left-0 after:bg-blue-500 after:h-0.5 after:w-0 
              hover:after:w-full after:transition-all after:ease-in-out after:duration-300">Xem thêm</div>
            </Link>
          </div>

          <div className="grid md:grid-cols-5 grid-cols-2 gap-4 ">
            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
              <div className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                <img src="https://product.hstatic.net/1000182631/product/z5283249145272_e2dedfa5565fa3f51f52969a445ed089_2fdc3af97dd94e12a2559abcb126d061_medium.jpg" alt="hello" />
              </div>
              <div className="pt-2 font-medium">Ghẹ xanh loại 1- sống</div>
              <div className="flex justify-between text-center flex-wrap">
                <div className="text-blue-500 font-bold">690.000đ</div>
                <div className="text-[#939393] line-through font-medium">690.000đ</div>
                <div className="bg-orange-500 p-0.5 rounded-md">-45%</div>
              </div>

              <div className="flex justify-between pb-5">
                <div></div>
                <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                <div></div>
              </div>
            </div>

            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
              <div className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                <img src="https://product.hstatic.net/1000182631/product/z5283249145272_e2dedfa5565fa3f51f52969a445ed089_2fdc3af97dd94e12a2559abcb126d061_medium.jpg" alt="" />
              </div>
              <div className="pt-2 font-medium">Ghẹ xanh loại 1- sống</div>
              <div className="flex justify-between text-center flex-wrap">
                <div className="text-blue-500 font-bold">690.000đ</div>
                <div className="text-[#939393] line-through font-medium">690.000đ</div>
                <div className="bg-orange-500 p-0.5 rounded-md">-45%</div>
              </div>

              <div className="flex justify-between">
                <div></div>
                <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                <div></div>
              </div>

            </div>

            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
              <div className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                <img src="https://product.hstatic.net/1000182631/product/z5283249145272_e2dedfa5565fa3f51f52969a445ed089_2fdc3af97dd94e12a2559abcb126d061_medium.jpg" alt="" />
              </div>
              <div className="pt-2 font-medium">Ghẹ xanh loại 1- sống</div>
              <div className="flex justify-between text-center flex-wrap">
                <div className="text-blue-500 font-bold">690.000đ</div>
                <div className="text-[#939393] line-through font-medium">690.000đ</div>
                <div className="bg-orange-500 p-0.5 rounded-md">-45%</div>
              </div>

              <div className="flex justify-between">
                <div></div>
                <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                <div></div>
              </div>

            </div>

            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
              <div className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                <img src="https://product.hstatic.net/1000182631/product/z5283249145272_e2dedfa5565fa3f51f52969a445ed089_2fdc3af97dd94e12a2559abcb126d061_medium.jpg" alt="" />
              </div>
              <div className="pt-2 font-medium">Ghẹ xanh loại 1- sống</div>
              <div className="flex justify-between text-center flex-wrap">
                <div className="text-blue-500 font-bold">690.000đ</div>
                <div className="text-[#939393] line-through font-medium">690.000đ</div>
                <div className="bg-orange-500 p-0.5 rounded-md">-45%</div>
              </div>

              <div className="flex justify-between">
                <div></div>
                <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                <div></div>
              </div>

            </div>

            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
              <div className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                <img src="https://product.hstatic.net/1000182631/product/z5283249145272_e2dedfa5565fa3f51f52969a445ed089_2fdc3af97dd94e12a2559abcb126d061_medium.jpg" alt="" />
              </div>
              <div className="pt-2 font-medium">Ghẹ xanh loại 1- sống</div>
              <div className="flex justify-between text-center flex-wrap">
                <div className="text-blue-500 font-bold">690.000đ</div>
                <div className="text-[#939393] line-through font-medium">690.000đ</div>
                <div className="bg-orange-500 p-0.5 rounded-md">-45%</div>
              </div>

              <div className="flex justify-between">
                <div></div>
                <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                <div></div>
              </div>

            </div>
          </div>

          {/* Img banner */}
          <div className="py-5">
            <img src="https://theme.hstatic.net/1000182631/1000966139/14/index_ads_1_dek.png?v=1087" alt="" />
          </div>
        </div>
      </div>

      {/* ====== Tôm ===== */}
      <div className="section-best-sales py-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between py-4">
            <Link href={""} >
              <div className="uppercase font-bold text-xl relative after:absolute 
              after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
              hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                tôm</div>
            </Link>

            <Link href={""} >
              <div className="text-gray-400 relative after:absolute 
              after:bottom-0 after:left-0 after:bg-blue-500 after:h-0.5 after:w-0 
              hover:after:w-full after:transition-all after:ease-in-out after:duration-300">Xem thêm</div>
            </Link>
          </div>

          <div className="grid md:grid-cols-5 grid-cols-2 gap-4 ">
            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
              <div className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                <img src="https://product.hstatic.net/1000182631/product/tom_hum_bong2_456f50446bc84becbfa8cdea1ea69f41_medium.jpg" alt="hello" />
              </div>
              <div className="pt-2 font-medium">Ghẹ xanh loại 1- sống</div>
              <div className="flex justify-between text-center flex-wrap">
                <div className="text-blue-500 font-bold">690.000đ</div>
                <div className="text-[#939393] line-through font-medium">690.000đ</div>
                <div className="bg-orange-500 p-0.5 rounded-md">-45%</div>
              </div>

              <div className="flex justify-between pb-5">
                <div></div>
                <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                <div></div>
              </div>
            </div>

            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
              <div className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                <img src="https://product.hstatic.net/1000182631/product/tom_hum_bong2_456f50446bc84becbfa8cdea1ea69f41_medium.jpg" alt="" />
              </div>
              <div className="pt-2 font-medium">Ghẹ xanh loại 1- sống</div>
              <div className="flex justify-between text-center flex-wrap">
                <div className="text-blue-500 font-bold">690.000đ</div>
                <div className="text-[#939393] line-through font-medium">690.000đ</div>
                <div className="bg-orange-500 p-0.5 rounded-md">-45%</div>
              </div>

              <div className="flex justify-between">
                <div></div>
                <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                <div></div>
              </div>

            </div>

            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
              <div className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                <img src="https://product.hstatic.net/1000182631/product/tom_hum_bong2_456f50446bc84becbfa8cdea1ea69f41_medium.jpg" alt="" />
              </div>
              <div className="pt-2 font-medium">Ghẹ xanh loại 1- sống</div>
              <div className="flex justify-between text-center flex-wrap">
                <div className="text-blue-500 font-bold">690.000đ</div>
                <div className="text-[#939393] line-through font-medium">690.000đ</div>
                <div className="bg-orange-500 p-0.5 rounded-md">-45%</div>
              </div>

              <div className="flex justify-between">
                <div></div>
                <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                <div></div>
              </div>

            </div>

            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
              <div className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                <img src="https://product.hstatic.net/1000182631/product/tom_hum_bong2_456f50446bc84becbfa8cdea1ea69f41_medium.jpg" alt="" />
              </div>
              <div className="pt-2 font-medium">Ghẹ xanh loại 1- sống</div>
              <div className="flex justify-between text-center flex-wrap">
                <div className="text-blue-500 font-bold">690.000đ</div>
                <div className="text-[#939393] line-through font-medium">690.000đ</div>
                <div className="bg-orange-500 p-0.5 rounded-md">-45%</div>
              </div>

              <div className="flex justify-between">
                <div></div>
                <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                <div></div>
              </div>

            </div>

            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
              <div className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                <img src="https://product.hstatic.net/1000182631/product/tom_hum_bong2_456f50446bc84becbfa8cdea1ea69f41_medium.jpg" alt="" />
              </div>
              <div className="pt-2 font-medium">Ghẹ xanh loại 1- sống</div>
              <div className="flex justify-between text-center flex-wrap">
                <div className="text-blue-500 font-bold">690.000đ</div>
                <div className="text-[#939393] line-through font-medium">690.000đ</div>
                <div className="bg-orange-500 p-0.5 rounded-md">-45%</div>
              </div>

              <div className="flex justify-between">
                <div></div>
                <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                <div></div>
              </div>

            </div>
          </div>

          {/* Img banner */}
          <div className="py-5">
            <img src="https://theme.hstatic.net/1000182631/1000966139/14/index_ads_2_dek.png?v=1087" alt="" />
          </div>
        </div>
      </div>

      {/* ====== Cua ===== */}
      <div className="section-best-sales py-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between py-4">
            <Link href={""} >
              <div className="uppercase font-bold text-xl relative after:absolute 
              after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
              hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                cua - ghẹ</div>
            </Link>

            <Link href={""} >
              <div className="text-gray-400 relative after:absolute 
              after:bottom-0 after:left-0 after:bg-blue-500 after:h-0.5 after:w-0 
              hover:after:w-full after:transition-all after:ease-in-out after:duration-300">Xem thêm</div>
            </Link>
          </div>

          <div className="grid md:grid-cols-5 grid-cols-2 gap-4 ">
            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
              <div className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                <img src="https://product.hstatic.net/1000182631/product/4_099ae6cd15e64bde8bf8c65485b57ffc_medium.jpg" alt="hello" />
              </div>
              <div className="pt-2 font-medium">Ghẹ xanh loại 1- sống</div>
              <div className="flex justify-between text-center flex-wrap">
                <div className="text-blue-500 font-bold">690.000đ</div>
                <div className="text-[#939393] line-through font-medium">690.000đ</div>
                <div className="bg-orange-500 p-0.5 rounded-md">-45%</div>
              </div>

              <div className="flex justify-between pb-5">
                <div></div>
                <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                <div></div>
              </div>
            </div>

            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
              <div className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                <img src="https://product.hstatic.net/1000182631/product/4_099ae6cd15e64bde8bf8c65485b57ffc_medium.jpg" alt="" />
              </div>
              <div className="pt-2 font-medium">Ghẹ xanh loại 1- sống</div>
              <div className="flex justify-between text-center flex-wrap">
                <div className="text-blue-500 font-bold">690.000đ</div>
                <div className="text-[#939393] line-through font-medium">690.000đ</div>
                <div className="bg-orange-500 p-0.5 rounded-md">-45%</div>
              </div>

              <div className="flex justify-between">
                <div></div>
                <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                <div></div>
              </div>

            </div>

            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
              <div className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                <img src="https://product.hstatic.net/1000182631/product/4_099ae6cd15e64bde8bf8c65485b57ffc_medium.jpg" alt="" />
              </div>
              <div className="pt-2 font-medium">Ghẹ xanh loại 1- sống</div>
              <div className="flex justify-between text-center flex-wrap">
                <div className="text-blue-500 font-bold">690.000đ</div>
                <div className="text-[#939393] line-through font-medium">690.000đ</div>
                <div className="bg-orange-500 p-0.5 rounded-md">-45%</div>
              </div>

              <div className="flex justify-between">
                <div></div>
                <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                <div></div>
              </div>

            </div>

            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
              <div className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                <img src="https://product.hstatic.net/1000182631/product/4_099ae6cd15e64bde8bf8c65485b57ffc_medium.jpg" alt="" />
              </div>
              <div className="pt-2 font-medium">Ghẹ xanh loại 1- sống</div>
              <div className="flex justify-between text-center flex-wrap">
                <div className="text-blue-500 font-bold">690.000đ</div>
                <div className="text-[#939393] line-through font-medium">690.000đ</div>
                <div className="bg-orange-500 p-0.5 rounded-md">-45%</div>
              </div>

              <div className="flex justify-between">
                <div></div>
                <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                <div></div>
              </div>

            </div>

            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
              <div className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                <img src="https://product.hstatic.net/1000182631/product/4_099ae6cd15e64bde8bf8c65485b57ffc_medium.jpg" alt="" />
              </div>
              <div className="pt-2 font-medium">Ghẹ xanh loại 1- sống</div>
              <div className="flex justify-between text-center flex-wrap">
                <div className="text-blue-500 font-bold">690.000đ</div>
                <div className="text-[#939393] line-through font-medium">690.000đ</div>
                <div className="bg-orange-500 p-0.5 rounded-md">-45%</div>
              </div>

              <div className="flex justify-between">
                <div></div>
                <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                <div></div>
              </div>

            </div>
          </div>

          {/* Img banner */}
          <div className="py-5">
            <img src="https://theme.hstatic.net/1000182631/1000966139/14/index_ads_3_dek.png?v=1087" alt="" />
          </div>
        </div>
      </div>

      {/* Section có thể bạn chưa biết */}
      <div className="section pb-10">
        <div className="max-w-screen-xl mx-auto">


          <div className="grid grid-cols-4 pb-2">
            <div className="col-span-3">
              <div className="uppercase font-bold text-xl relative after:absolute 
              after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
              hover:after:w-[230px] after:transition-all after:ease-in-out after:duration-300">Có thể bạn chưa biết</div>
            </div>
            <div className="uppercase font-bold text-xl relative after:absolute 
              after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
              hover:after:w-[230px] after:transition-all after:ease-in-out after:duration-300">Ý kiến khách hàng</div>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
            <div className="col-span-3">
              {/* ========To Do ========== */}

              {/* 
              Nên đưa component carousel này ra component 
              riêng để sd user client, page này là page home 
              k được sử dụng use client
              */}
              <Carousel responsive={responsive}>

                <div className="border rounded-2xl space-y-3 hover:shadow-lg mr-4">
                  <img src="https://file.hstatic.net/1000182631/article/tet2024.seo_3a0ecdc12a39493988c0c34e84132e56_large.jpg" alt="" className="rounded-2xl cursor-pointer" />
                  <div className="px-2 ">
                    <div className="text-center text-2xl uppercase font-medium pt-2 pb-2 cursor-pointer">Hải sản hoàng gia phục vụ tết</div>
                    <div className="text-left">Lorem ipsum dolor sit amet consectetur
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
                    <div className="text-center text-2xl uppercase font-medium pt-2 pb-2 cursor-pointer">Hải sản hoàng gia phục vụ tết</div>
                    <div className="text-left">Lorem ipsum dolor sit amet consectetur
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
                    <div className="text-center text-2xl uppercase font-medium pt-2 pb-2 cursor-pointer">Hải sản hoàng gia phục vụ tết</div>
                    <div className="text-left">Lorem ipsum dolor sit amet consectetur
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
                    <div className="text-center text-2xl uppercase font-medium pt-2 pb-2 cursor-pointer">Hải sản hoàng gia phục vụ tết</div>
                    <div className="text-left">Lorem ipsum dolor sit amet consectetur
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
            </div>

            <div className="">4</div>
          </div>


        </div>
      </div>



      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

