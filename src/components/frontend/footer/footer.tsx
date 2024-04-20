/* eslint-disable @next/next/no-img-element */
import { Dot, MapPin } from "lucide-react";
import Link from "next/link";
import CarouselPartner from "../components/carouselMultiple/carouselPartner";


function Footer() {
    return (
        <>
            {/* Partner */}
            <div className="max-w-screen-xl mx-auto pb-10 px-4">
                <div className="sm:flex hidden mb-10 items-center justify-between flex-wrap">
                    <div className="h-0.5 bg-blue-500 w-auto flex-grow"></div>
                    <div className="md:py-3 py-2 md:px-10 px-4 rounded-full text-white bg-blue-500 uppercase md:text-xl text-xs">Đối tác của hải sản miền nam</div>
                    <div className="h-0.5 bg-blue-500 w-auto flex-grow"></div>
                </div>
                <div className="sm:hidden mb-10">
                    <div className="w-full border-t border-dashed border-gray-500 mb-10"></div>
                    <div className="w-full text-center uppercase text-2xl font-medium">Đối tác của hải sản miền nam</div>
                </div>
                <CarouselPartner />
            </div>


            {/* ========= Banner footer ========== */}
            <div className="pt-10">
                <div className="">
                    <img src="https://theme.hstatic.net/1000182631/1000966139/14/banner-slogan.jpg?v=1100" alt="" />
                </div>
            </div>

            <footer className="bg-yellow-400">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-4 py-10">

                        <div className="space-y-3 ">
                            <div className="text-xl uppercase font-medium ">công ty TNHH Thương mại quốc tế hải sản miền nam</div>
                            <div className="flex space-x-2 mt-5 ">
                                <div className="flex items-center">
                                    <MapPin size={18} />
                                </div>
                                <div className="">
                                    <span className="font-medium">TP.HCM - Quận Bình Tân: </span>
                                    220 Đường số 3, Bình Hưng Hoà B
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <div className="flex items-center">
                                    <MapPin size={18} />
                                </div>
                                <div className="">
                                    <span className="font-medium">TP.HCM - Huyện Bình Chánh: </span>
                                    F5/3E tổ 16, Ấp 6C, xã Vĩnh Lộc A
                                </div>
                            </div>
                        </div>



                        <div className="">
                            <div className="text-xl uppercase ml-10">Danh mục</div>
                            <div className="mt-6">
                                <Link href={"/"} className="flex cursor-pointer items-center ml-10">
                                    <Dot className="hover:text-white" size={40} />
                                    <div className="relative after:absolute 
            after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
            hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                                        Trang chủ
                                    </div>
                                </Link>
                                <Link href={"/"} className="flex cursor-pointer items-center ml-10">
                                    <Dot className="hover:text-white" size={40} />
                                    <div className="relative after:absolute 
            after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
            hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                                        Sản phẩm
                                    </div>
                                </Link>
                                <Link href={"/"} className="flex cursor-pointer items-center ml-10">
                                    <Dot className="hover:text-white" size={40} />
                                    <div className="relative after:absolute 
            after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
            hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                                        Khuyến mãi
                                    </div>
                                </Link>
                                <Link href={"/blog/goc-am-thuc"} className="flex cursor-pointer items-center ml-10">
                                    <Dot className="hover:text-white" size={40} />
                                    <div className="relative after:absolute 
            after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
            hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                                        Góc ẩm thực
                                    </div>
                                </Link>
                                <Link href={"/"} className="flex cursor-pointer items-center ml-10">
                                    <Dot className="hover:text-white" size={40} />
                                    <div className="relative after:absolute 
            after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
            hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                                        Liên hệ
                                    </div>
                                </Link>
                                <Link href={"/"} className="flex cursor-pointer items-center ml-10">
                                    <Dot className="hover:text-white" size={40} />
                                    <div className="relative after:absolute 
            after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
            hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                                        Giới thiệu
                                    </div>
                                </Link>
                                <Link href={"/"} className="flex cursor-pointer items-center ml-10">
                                    <Dot className="hover:text-white" size={40} />
                                    <div className="relative after:absolute 
            after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
            hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                                        Sự kiện Hoàng Gia
                                    </div>
                                </Link>
                                <Link href={"/"} className="flex cursor-pointer items-center ml-10">
                                    <Dot className="hover:text-white" size={40} />
                                    <div className="relative after:absolute 
            after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
            hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                                        Công bố sản phẩm
                                    </div>
                                </Link>
                                <Link href={"/page/bo-tieu-chuan-cac-san-pham"} className="flex cursor-pointer items-center ml-10">
                                    <Dot className="hover:text-white" size={40} />
                                    <div className="relative after:absolute 
            after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
            hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                                        Bộ tiêu chuẩn sản phẩm
                                    </div>
                                </Link>
                            </div>
                        </div>


                        <div className="">
                            <div className="text-xl uppercase font-medium ">Chăm sóc khách hàng</div>
                            <div className="mt-6">
                                <Link href={"/"} className="flex space-x-2 items-center">
                                    <Dot className="hover:text-white" size={40} />
                                    <div className="relative after:absolute 
            after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
            hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                                        Chính sách giao hàng
                                    </div>
                                </Link>
                                <Link href={"/"} className="flex space-x-2 items-center">
                                    <Dot className="hover:text-white" size={40} />
                                    <div className="relative after:absolute 
            after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
            hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                                        Chính sách Đổi trả
                                    </div>
                                </Link>
                                <Link href={"/"} className="flex space-x-2 items-center">
                                    <Dot className="hover:text-white" size={40} />
                                    <div className="relative after:absolute 
            after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
            hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                                        Chính sách về bảo mật thông tin
                                    </div>
                                </Link>
                                <Link href={"/"} className="flex space-x-2 items-center">
                                    <Dot className="hover:text-white" size={40} />
                                    <div className="relative after:absolute 
            after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
            hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                                        Chính sách khách hàng thân thiết
                                    </div>
                                </Link>
                                <Link href={"/"} className="flex space-x-2 items-center">
                                    <Dot className="hover:text-white" size={40} />
                                    <div className="relative after:absolute 
            after:bottom-0 after:left-0 after:bg-blue-500 after:h-1 after:w-0 
            hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                                        Phương thức thanh toán
                                    </div>
                                </Link>
                            </div>

                        </div>


                        <div className="">
                            <div className="text-xl uppercase font-medium ">Kết nối với chúng tôi</div>
                            <div className="flex space-x-5 mt-8">
                                <Link href={"/"} className="">
                                    <img src="https://theme.hstatic.net/1000182631/1000966139/14/youtube.png?v=1100" alt="" />
                                </Link>
                                <Link href={"/"} className="">
                                    <img src="https://theme.hstatic.net/1000182631/1000966139/14/instagram.png?v=1100" alt="" />
                                </Link>
                                <Link href={"/"} className="">
                                    <img src="https://theme.hstatic.net/1000182631/1000966139/14/tiktok.png?v=1100" alt="" />
                                </Link>
                                <Link href={"/"} className="">
                                    <img src="https://theme.hstatic.net/1000182631/1000966139/14/zalo.png?v=1100" alt="" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>


    );
}

export default Footer;