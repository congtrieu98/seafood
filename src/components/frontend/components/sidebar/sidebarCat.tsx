/* eslint-disable @next/next/no-img-element */
'use client'

import Link from "next/link"

const SidebarCat = () => {

    return (
        <>
            <div className="hidden md:block duration-1000
                p-2 w-[245px] overflow-y-auto text-center bg-gray-100 shadow">
                <div className="text-gray-900 text-xl">
                    <div>
                        <Link href={"/danh-muc/ban-chay-nhat"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="bcn" />
                            <div className="text-[15px] ml-4 text-gray-900">Bán chạy nhất</div>
                        </Link>
                        <Link href={"/danh-muc/san-pham-nhap-khau"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="bcn" />
                            <div className="text-[15px] ml-4 text-gray-900">Sản phẩm nhập khẩu</div>
                        </Link>
                        <Link href={"/danh-muc/cua"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="spnk" />
                            <div className="text-[15px] ml-4 text-gray-900">Cua</div>
                        </Link>
                        <Link href={"/danh-muc/ca"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="spnk" />
                            <div className="text-[15px] ml-4 text-gray-900">Cá</div>
                        </Link>

                        <Link href={"/danh-muc/bach-tuot"} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="spnk" />
                            <div className="text-[15px] ml-4 text-gray-900">Bạch tuột</div>
                        </Link>

                        <Link href={"/danh-muc/so-ngeu"} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="spnk" />
                            <div className="text-[15px] ml-4 text-gray-900">Sò, ngêu</div>
                        </Link>

                    </div>
                </div>
            </div>
        </>

    );
}

export default SidebarCat;