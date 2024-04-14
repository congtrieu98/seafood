/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function DliveryPolicy() {
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
                <div className="text-2xl font-bold mb-10">Chính giao hàng</div>
                <div className="text-sm mb-5">Kính thưa Quý khách hàng,</div>
                <div className="mb-5">
                    LHải Sản Hoàng Gia trân trọng thông báo đến Quý Khách Hàng về chính sách giao hàng tại Thành Phố Hồ Chí Minh như sau:
                </div>
                <img src="https://file.hstatic.net/1000182631/file/bieu-phi-ship_9a8109df99a344f8a08ed890befbf89c.jpg" alt="" />

            </div>
        </div>
    );
}

export default DliveryPolicy;