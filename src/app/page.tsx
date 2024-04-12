/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PmwTvNfrVgf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import CarouselPartner from "@/components/frontend/components/carouselMultiple/carouselPartner";
import CarouselPost from "@/components/frontend/components/carouselMultiple/carouselPost";
import SidebarCat from "@/components/frontend/components/sidebar/sidebarCat";
import CustomerReview from "@/components/frontend/components/sliderBaner/customerReview";
import HomeSliderBanner from "@/components/frontend/components/sliderBaner/homeSliderBanner";
import Link from "next/link";

export default function HomePage() {

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
      <div className="section pb-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
            <div className="col-span-3">
              {/* Carousel Post */}
              <div className=" flex justify-between">
                <div className="mb-4 uppercase font-bold text-xl relative after:absolute 
              after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
              hover:after:w-[235px] after:transition-all after:ease-in-out after:duration-300">
                  Có thể bạn chưa biết
                </div>
                <Link href={""} className="md:hidden">
                  <div className="text-gray-400 relative after:absolute 
              after:bottom-0 after:left-0 after:bg-blue-500 after:h-0.5 after:w-0 
              hover:after:w-full after:transition-all after:ease-in-out after:duration-300">Xem thêm</div>
                </Link>
              </div>

              <CarouselPost />
            </div>

            <div className="">
              <div className="uppercase my-4 md:mt-0 font-bold text-xl relative after:absolute
              after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
              hover:after:w-[210px] after:transition-all after:ease-in-out after:duration-300">
                Ý kiến khách hàng
              </div>
              <CustomerReview />
            </div>
          </div>
        </div>
      </div>

      {/* Partner */}
      <div className="max-w-screen-xl mx-auto px-4 pb-10">
        <div className="sm:grid grid-cols-3 mb-10 hidden">
          <div className="h-0.5 bg-blue-500 mt-6"></div>
          <div className="md:py-3 py-2 md:px-10 px-4 rounded-full text-white bg-blue-500 uppercase md:text-xl text-xs">Đối tác của hải sản miền nam</div>
          <div className="h-0.5 bg-blue-500 mt-6"></div>
        </div>
        <CarouselPartner />
      </div>


      {/* Footer */}
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

