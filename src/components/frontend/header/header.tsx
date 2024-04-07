/* eslint-disable @next/next/no-img-element */
'use client'

import MenuDropdownHeader from "@/components/frontend/components/menu/menu-dopdowwn";
import SearchForm from "@/components/frontend/components/search/searchForm";
import { Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div>
            {/* chead */}
            <div className="px-4 lg:px-6 h-20 bg-yellow-400">
                <div className="flex max-w-screen-xl mx-auto justify-between leading-5 items-center">
                    <Link className="flex items-center justify-center" href="/">
                        <img
                            src={'/assets/logo.png'}
                            height={80}
                            width={80}
                            alt="logo"
                            className="rounded-full"
                        />
                    </Link>
                    <div className="md:flex justify-center items-center hidden">
                        Mua hàng online liên hệ ngay hotline: 090.998.3514
                    </div>
                    <div className="flex justify-end items-end">
                        <MenuDropdownHeader />
                    </div>
                    <nav className=" flex gap-4 sm:gap-6">
                        <Link
                            className="text-sm font-medium hover:underline underline-offset-4"
                            href="/sign-in"
                        >
                            Sig In
                        </Link>
                        <Link
                            className="text-sm font-medium hover:underline underline-offset-4"
                            href="/sign-up"
                        >
                            Sign Up
                        </Link>
                    </nav>
                </div>
            </div>


            {/* header */}
            <div className="py-5 md:px-5 px-0 leading-5 bg-[#051c69]">
                <div className="relative max-w-screen-xl md:space-y-0 space-y-3 mx-auto md:flex flex-wrap items-center justify-between leading-5">
                    {/* Logo */}
                    <Link className=" md:flex items-center justify-center hidden" href="/">
                        <img
                            src={'/assets/logo.png'}
                            height={80}
                            width={80}
                            alt="logo"
                            className="rounded-full"
                        />
                    </Link>
                    <div className="md:hidden cursor-pointer">
                        <Menu color="#fff" size={30} />
                    </div>
                    <div className="flex justify-center text-2xl leading-10 items-center text-[#f0ea1f]">
                        TƯƠI NGON TỪ NGUỒN
                    </div>

                    {/* Search form */}
                    <SearchForm />

                    {/* Cart */}
                    <div className="md:hidden absolute md:top-0 -top-3 md:right-0 right-5 flex justify-center text-sm items-center text-white hover:text-[#f0ea1f] cursor-pointer">
                        <div className="cart-icon relative">
                            <ShoppingCart size={30} />
                            <div className="bg-red-500 text-white px-2 py-1 rounded-full absolute -top-4 -right-4 ">0</div>
                        </div>
                    </div>

                    <div className="md:flex hidden justify-center text-sm items-center text-white hover:text-[#f0ea1f] cursor-pointer">
                        <div className="cart-icon relative">
                            <ShoppingCart size={30} />
                            <div className="bg-red-500 text-white px-2 py-1 rounded-full absolute -top-4 -right-4 ">0</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* menu service */}
            <div className="relative leading-5 bg-[#051c69] border-t-2 border-t-white hidden md:block">

                <div className="max-w-screen-xl mx-auto grid grid-cols-5 leading-5 gap-4">

                    <div className="">
                        <div className="p-4 flex items-center bg-[#f0ea1f]">
                            <Menu />
                            <h1 className="text-[15px] ml-3 text-xl text-gray-900 font-bold">Danh mục</h1>
                            {/* <i className="bi bi-x ml-20 cursor-pointer lg:hidden"></i> */}
                        </div>
                    </div>
                    <div className="flex text-left self-stretch text-white font-medium text-xs leading-5 uppercase hover:bg-[#f0ea1f] p-2 rounded-sm">
                        <div>
                            <Image
                                src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1_pc.png?v=1086"
                                height={30}
                                width={30}
                                alt="like"
                                className="mr-2"
                            />
                        </div>

                        <div className="flex flex-wrap">
                            Cam kết chất lượng an toàn xuất xứ
                        </div>
                    </div>
                    <div className="flex text-left self-stretch text-white font-medium text-xs leading-5 uppercase hover:bg-[#f0ea1f] p-2 rounded-sm">
                        <div>
                            <Image
                                src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1_pc.png?v=1086"
                                height={30}
                                width={30}
                                alt="like"
                                className="mr-2"
                            />
                        </div>
                        <div className="flex flex-wrap">
                            1 đổi 1 trong 2h  nhanh chóng, tận nhà
                        </div>
                    </div>
                    <div className="flex text-left self-stretch text-white font-medium text-xs leading-5 uppercase hover:bg-[#f0ea1f] p-2 rounded-sm">
                        <div>
                            <Image
                                src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1_pc.png?v=1086"
                                height={30}
                                width={30}
                                alt="like"
                                className="mr-2"
                            />
                        </div>
                        <div className="flex flex-wrap">
                            Chuẩn đóng gói sạch sẽ, tiện lợi
                        </div>
                    </div>
                    <div className="flex text-left text-white font-medium text-xs leading-5 uppercase hover:bg-[#f0ea1f] p-2 rounded-sm">
                        <div>
                            <Image
                                src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1_pc.png?v=1086"
                                height={30}
                                width={30}
                                alt="like"
                                className="mr-2"
                            />
                        </div>
                        <div className="flex flex-wrap">
                            Giao hàng nhanh free ship
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header