/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function AboutUs() {
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 py-10">
            <div className="col-span-1">
                <div className="hidden md:block duration-1000
                        p-2 w-[245px] overflow-y-auto text-center bg-gray-100 shadow">
                    <div className="text-gray-900 text-xl">
                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 border-b-2">
                            <div className="text-xl ml-4 text-gray-900">Danh mục trang</div>
                        </div>
                        <Link href={"/page/about-us"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <div className="text-[15px] ml-4 text-gray-900">Giới thiệu</div>
                        </Link>
                        <Link href={"/page/chinh-sach-bao-hanh-va-doi-tra"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <div className="text-[15px] ml-4 text-gray-900">Chính sách đổi trả hàng</div>
                        </Link>
                        <Link href={"/page/chinh-sach-giao-hang"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <div className="text-[15px] ml-4 text-gray-900">Chính sách giao hàng</div>
                        </Link>
                        <Link href={"/page/bo-tieu-chuan-cac-san-pham"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300">
                            <div className="text-[15px] ml-4 text-gray-900">Bộ tiêu chuẩn sản phẩm</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-span-3">
                <div className="text-2xl font-bold mb-10">Giới thiệu</div>

                <img src="https://file.hstatic.net/1000182631/file/site-1_bcbed9fc141b40169fef7e1af81dc0ff.jpg" alt="" />
            </div>
        </div>
    );
}

export default AboutUs;