/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

function CulinaryCorner() {
    return (
        <div className="max-w-screen-xl mx-auto md:px-0 px-4">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 py-5 sm:mt-5 mt-40">
                <div className="col-span-1">
                    <div className="p-2 border rounded-md mb-5">
                        <div className="p-2 text-center items-center uppercase">
                            BÀI VIẾT MỚI NHẤT
                        </div>
                        <div className="border border-b border-b-black"></div>
                        <div className="pt-5 space-y-3">
                            <div className="grid grid-cols-2 gap-2 hover:shadow-lg p-2 rounded-md">
                                <Link href={"/blog/slug-my-blog"} className="overflow-hidden">
                                    <img
                                        src="https://file.hstatic.net/1000182631/article/kham-pha-am-thuc-ireland_833708ee03ff4202b8eb73c059594e13_large.jpg"
                                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500"
                                        alt="" />
                                </Link>
                                <div className="">
                                    <Link href={"/blog/slug-my-blog"} className="uppercase font-medium hover:text-blue-500">KHÁM PHÁ ẨM THỰC BIỂN IRELAND TỪ CUA NÂU VÀ ỐC BULOT</Link>
                                    <div className="pt-4">
                                        <div className=" text-gray-400">Hải sản Hoàng Gia</div>
                                        <div className=" text-gray-300">29.3.2023</div>
                                    </div>

                                </div>
                            </div>
                            <Separator />
                            <div className="grid grid-cols-2 gap-2 hover:shadow-lg p-2 rounded-md">
                                <Link href={"/blog/slug-my-blog"} className=" overflow-hidden">
                                    <img src="https://file.hstatic.net/1000182631/article/kham-pha-am-thuc-ireland_833708ee03ff4202b8eb73c059594e13_large.jpg" alt="" />
                                </Link>
                                <div className="">
                                    <Link href={"/blog/slug-my-blog"} className="uppercase">KHÁM PHÁ ẨM THỰC BIỂN IRELAND TỪ CUA NÂU VÀ ỐC BULOT</Link>
                                    <div className="pt-4">
                                        <div className=" text-gray-400">Hải sản Hoàng Gia</div>
                                        <div className=" text-gray-300">29.3.2023</div>
                                    </div>

                                </div>
                            </div>
                            <Separator />
                            <div className="grid grid-cols-2 gap-2 hover:shadow-lg p-2 rounded-md">
                                <Link href={"/blog/slug-my-blog"} className=" overflow-hidden">
                                    <img src="https://file.hstatic.net/1000182631/article/kham-pha-am-thuc-ireland_833708ee03ff4202b8eb73c059594e13_large.jpg"
                                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
                                        alt=""
                                    />
                                </Link>
                                <div className="">
                                    <Link href={"/blog/slug-my-blog"} className="uppercase">KHÁM PHÁ ẨM THỰC BIỂN IRELAND TỪ CUA NÂU VÀ ỐC BULOT</Link>
                                    <div className="pt-4">
                                        <div className=" text-gray-400">Hải sản Hoàng Gia</div>
                                        <div className=" text-gray-300">29.3.2023</div>
                                    </div>

                                </div>
                            </div>
                            <Separator />
                            <div className="grid grid-cols-2 gap-2 hover:shadow-lg p-2 rounded-md">
                                <Link href={"/blog/slug-my-blog"} className=" overflow-hidden">
                                    <img src="https://file.hstatic.net/1000182631/article/kham-pha-am-thuc-ireland_833708ee03ff4202b8eb73c059594e13_large.jpg" alt="" />
                                </Link>
                                <div className="">
                                    <Link href={"/blog/slug-my-blog"} className="uppercase">KHÁM PHÁ ẨM THỰC BIỂN IRELAND TỪ CUA NÂU VÀ ỐC BULOT</Link>
                                    <div className="pt-4">
                                        <div className=" text-gray-400">Hải sản Hoàng Gia</div>
                                        <div className=" text-gray-300">29.3.2023</div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="duration-1000
                        p-2  overflow-y-auto text-center shadow">
                        <div className="text-gray-900 text-xl">
                            <div className="p-2.5 mt-2 rounded-md px-4 border-b-2">
                                <div className="text-xl  text-gray-900 items-center text-center uppercase">Danh mục blog</div>
                            </div>
                            <Link href={"/page/about-us"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                                <div className="text-[15px] ml-4 text-gray-900">Giới thiệu</div>
                            </Link>
                            <Link href={"/page/chinh-sach-bao-hanh-va-doi-tra"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                                <div className="text-[15px] ml-4 text-gray-900">Khuyến mãi</div>
                            </Link>
                            <Link href={"/blog/goc-am-thuc"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                                <div className="text-[15px] ml-4 text-gray-900">Góc ẩm thực</div>
                            </Link>
                            <Link href={"/blog/su-kien"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                                <div className="text-[15px] ml-4 text-gray-900">Sự kiện</div>
                            </Link>
                            <Link href={"/page/bo-tieu-chuan-cac-san-pham"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300">
                                <div className="text-[15px] ml-4 text-gray-900">Bộ tiêu chuẩn sản phẩm</div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 md:pr-0 pr-4">
                    <div className="space-y-5">
                        <div className="flex md:justify-start justify-center md:my-0 mt-5 uppercase font-bold text-xl relative after:absolute 
                        after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
                        md:hover:after:w-[145px] after:transition-all after:ease-in-out after:duration-300"
                        >
                            góc ẩm thực
                        </div>
                        <div className="md:hidden items-center h-0.5 bg-blue-500"></div>



                        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                            <Link href={"/blog/slug-my-blog"} className="overflow-hidden">
                                <img
                                    src="https://file.hstatic.net/1000182631/article/kham-pha-am-thuc-ireland_833708ee03ff4202b8eb73c059594e13_large.jpg"
                                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500"
                                    alt="" />
                            </Link>
                            <div className="">
                                <Link href={"/blog/slug-my-blog"} className="uppercase font-medium hover:text-blue-500">KHÁM PHÁ ẨM THỰC BIỂN IRELAND TỪ CUA NÂU VÀ ỐC BULOT</Link>
                                <div className="py-4 flex justify-between">
                                    <div className=" text-gray-400">Hải sản Hoàng Gia</div>
                                    <div className=" text-gray-300">29.3.2023</div>
                                </div>
                                <div className="seafood_truncate-6">
                                    Ireland là một trong những điểm đến lý tưởng nhất dành cho những ai
                                    có niềm đam mê với hải sản và khám phá những vùng biển đẹp trên thế giới.
                                    Không chỉ nổi danh là “hòn đảo ngọc bích” quý báu của Bắc  u,
                                    Ireland còn được thiên nhiên ưu ái ban tặng khí hậu ôn hòa cùng
                                    với đó là nguồn tài nguyên biển trù phú, là nơi tập trung nhiều loại
                                    hải sản tươi ngon.Khám phá nét độc đáo trong ẩm thực phương Tây.
                                    Ireland còn được thiên nhiên ưu ái ban tặng khí hậu ôn hòa cùng
                                    với đó là nguồn tài nguyên biển trù phú, là nơi tập trung nhiều loại
                                    hải sản tươi ngon.Khám phá nét độc đáo trong ẩm thực phương Tây
                                </div>

                            </div>
                        </div>


                        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                            <Link href={"/blog/slug-my-blog"} className="overflow-hidden">
                                <img
                                    src="https://file.hstatic.net/1000182631/article/kham-pha-am-thuc-ireland_833708ee03ff4202b8eb73c059594e13_large.jpg"
                                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500"
                                    alt="" />
                            </Link>
                            <div className="">
                                <Link href={"/blog/slug-my-blog"} className="uppercase font-medium hover:text-blue-500">KHÁM PHÁ ẨM THỰC BIỂN IRELAND TỪ CUA NÂU VÀ ỐC BULOT</Link>
                                <div className="py-4 flex justify-between">
                                    <div className=" text-gray-400">Hải sản Hoàng Gia</div>
                                    <div className=" text-gray-300">29.3.2023</div>
                                </div>
                                <div className="seafood_truncate-6">
                                    Ireland là một trong những điểm đến lý tưởng nhất dành cho những ai
                                    có niềm đam mê với hải sản và khám phá những vùng biển đẹp trên thế giới.
                                    Không chỉ nổi danh là “hòn đảo ngọc bích” quý báu của Bắc  u,
                                    Ireland còn được thiên nhiên ưu ái ban tặng khí hậu ôn hòa cùng
                                    với đó là nguồn tài nguyên biển trù phú, là nơi tập trung nhiều loại
                                    hải sản tươi ngon.Khám phá nét độc đáo trong ẩm thực phương Tây.
                                    Ireland còn được thiên nhiên ưu ái ban tặng khí hậu ôn hòa cùng
                                    với đó là nguồn tài nguyên biển trù phú, là nơi tập trung nhiều loại
                                    hải sản tươi ngon.Khám phá nét độc đáo trong ẩm thực phương Tây
                                </div>

                            </div>
                        </div>


                        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                            <Link href={"/blog/slug-my-blog"} className="overflow-hidden">
                                <img
                                    src="https://file.hstatic.net/1000182631/article/kham-pha-am-thuc-ireland_833708ee03ff4202b8eb73c059594e13_large.jpg"
                                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500"
                                    alt="" />
                            </Link>
                            <div className="">
                                <Link href={"/blog/slug-my-blog"} className="uppercase font-medium hover:text-blue-500">KHÁM PHÁ ẨM THỰC BIỂN IRELAND TỪ CUA NÂU VÀ ỐC BULOT</Link>
                                <div className="py-4 flex justify-between">
                                    <div className=" text-gray-400">Hải sản Hoàng Gia</div>
                                    <div className=" text-gray-300">29.3.2023</div>
                                </div>
                                <div className="seafood_truncate-6">
                                    Ireland là một trong những điểm đến lý tưởng nhất dành cho những ai
                                    có niềm đam mê với hải sản và khám phá những vùng biển đẹp trên thế giới.
                                    Không chỉ nổi danh là “hòn đảo ngọc bích” quý báu của Bắc  u,
                                    Ireland còn được thiên nhiên ưu ái ban tặng khí hậu ôn hòa cùng
                                    với đó là nguồn tài nguyên biển trù phú, là nơi tập trung nhiều loại
                                    hải sản tươi ngon.Khám phá nét độc đáo trong ẩm thực phương Tây.
                                    Ireland còn được thiên nhiên ưu ái ban tặng khí hậu ôn hòa cùng
                                    với đó là nguồn tài nguyên biển trù phú, là nơi tập trung nhiều loại
                                    hải sản tươi ngon.Khám phá nét độc đáo trong ẩm thực phương Tây
                                </div>

                            </div>
                        </div>


                        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                            <Link href={"/blog/slug-my-blog"} className="overflow-hidden">
                                <img
                                    src="https://file.hstatic.net/1000182631/article/kham-pha-am-thuc-ireland_833708ee03ff4202b8eb73c059594e13_large.jpg"
                                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500"
                                    alt="" />
                            </Link>
                            <div className="">
                                <Link href={"/blog/slug-my-blog"} className="uppercase font-medium hover:text-blue-500">KHÁM PHÁ ẨM THỰC BIỂN IRELAND TỪ CUA NÂU VÀ ỐC BULOT</Link>
                                <div className="py-4 flex justify-between">
                                    <div className=" text-gray-400">Hải sản Hoàng Gia</div>
                                    <div className=" text-gray-300">29.3.2023</div>
                                </div>
                                <div className="seafood_truncate-6">
                                    Ireland là một trong những điểm đến lý tưởng nhất dành cho những ai
                                    có niềm đam mê với hải sản và khám phá những vùng biển đẹp trên thế giới.
                                    Không chỉ nổi danh là “hòn đảo ngọc bích” quý báu của Bắc  u,
                                    Ireland còn được thiên nhiên ưu ái ban tặng khí hậu ôn hòa cùng
                                    với đó là nguồn tài nguyên biển trù phú, là nơi tập trung nhiều loại
                                    hải sản tươi ngon.Khám phá nét độc đáo trong ẩm thực phương Tây.
                                    Ireland còn được thiên nhiên ưu ái ban tặng khí hậu ôn hòa cùng
                                    với đó là nguồn tài nguyên biển trù phú, là nơi tập trung nhiều loại
                                    hải sản tươi ngon.Khám phá nét độc đáo trong ẩm thực phương Tây
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* TO do Pagination */}
                </div>
            </div>
        </div>
    );
}

export default CulinaryCorner;