/* eslint-disable @next/next/no-img-element */
'use client'

import MenuDropdownHeader from "@/components/frontend/components/menu/menu-dopdowwn";
import SearchForm from "@/components/frontend/components/search/searchForm";
import { Menu, MoveLeft, ShoppingCart, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/lib/context/cartContext"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from "@/lib/utils";
import { additionalLinks, defaultLinks } from "@/config/nav";

const Header = () => {
    const pathName = usePathname()
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false)
    const { addItemToCart, cart } = useCart()

    const checkAdditionalLinks = additionalLinks[0].links.some(item => pathName.startsWith(item.href))
    const checkDefaultLinks = defaultLinks.some(item => pathName.startsWith(item.href))

    const handleClickSidebar = () => {
        setOpen(!open)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    //@ts-ignore

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', function () {
            var element = document.getElementById('fixedElement');
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 0) {
                if (element) {
                    element.style.top = '0';
                    setOpen(false)
                }
            } else {
                if (element) {
                    element.style.top = '80px';
                }
            }
        });
    }


    return (
        <div className={cn("relative",
            { "hidden": checkAdditionalLinks || checkDefaultLinks }
        )}>
            {/* Sidebar responsive */}
            <div id="sidebarResponsive" className={`fixed top-0 ${open ? "left-0" : "left-[-300px]"} duration-1000
                p-2 w-[300px] h-full overflow-y-auto text-center bg-gray-100 shadow z-50`}>
                <div className="text-gray-900 text-xl" >
                    <div>
                        <div className="flex justify-between py-3 border-b-2">
                            <Link className="flex items-center justify-center" href="/">
                                <img
                                    src={'/assets/logo.png'}
                                    height={50}
                                    width={50}
                                    alt="logo"
                                    className="rounded-full"
                                />
                            </Link>
                            <div className="py-2.5 items-end">
                                <div className="flex flex-col items-end text-gray-900 cursor-pointer" onClick={() => setOpen(false)}>
                                    <MoveLeft />
                                </div>
                            </div>
                        </div>


                        <div className="my-2 bg-slate-300 p-2 rounded-md">
                            <div className="uppercase text-sm p-2 border-b border-b-slate-500 ">
                                Tư vấn đặt hàng
                            </div>
                            <div className="flex px-5 py-3">
                                <div className="mr-2 flex items-center">
                                    <img src="https://theme.hstatic.net/1000182631/1000966139/14/hotline-icon.png?v=1110" alt="" />
                                </div>
                                <div className="items-start">
                                    <div className="flex items-start font-bold text-orange-400 text-sm">0937.033.747</div>
                                    <div className="flex items-start text-start text-sm">8h-21h (từ T2 - Chủ Nhật)</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="bcn" />
                            <div className="text-[15px] ml-4 text-gray-900">Bán chạy nhất</div>
                        </div>
                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="spnk" />
                            <div className="text-[15px] ml-4 text-gray-900">Cua</div>
                        </div>
                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="spnk" />
                            <div className="text-[15px] ml-4 text-gray-900">Cá</div>
                        </div>

                        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="spnk" />
                            <div className="text-[15px] ml-4 text-gray-900">Bạch tuột</div>
                        </div>

                        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2  hover:bg-gray-300">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_megamenu1.png?v=1086" alt="spnk" />
                            <div className="text-[15px] ml-4 text-gray-900">Sò, ngêu</div>
                        </div>
                        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2  hover:bg-gray-300">
                            <div className="text-[15px] ml-4 text-gray-900">Chăm sóc khách hàng</div>
                        </div>
                        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2  hover:bg-gray-300">
                            <div className="text-[15px] ml-4 text-gray-900">Khuyến mãi</div>
                        </div>
                        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2  hover:bg-gray-300">
                            <div className="text-[15px] ml-4 text-gray-900">Góc ẩm thực</div>
                        </div>
                        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-300">
                            <div className="text-[15px] ml-4 text-gray-900">Menu chế biến</div>
                        </div>

                    </div>
                </div>
            </div>
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
                        Mua hàng online liên hệ ngay hotline: 0937.033.747
                    </div>
                    <div className="flex justify-end items-end">
                        <MenuDropdownHeader />
                    </div>
                    <nav className=" flex gap-2 sm:gap-6">
                        <Link
                            className="text-sm font-medium hover:underline underline-offset-4"
                            href="/sign-in"
                        >
                            SigIn
                        </Link>
                        <Link
                            className="text-sm font-medium hover:underline underline-offset-4"
                            href="/sign-up"
                        >
                            SignUp
                        </Link>
                    </nav>
                </div>
            </div>

            {/* header */}
            <div id="fixedElement" className="py-5 md:px-5 px-0 leading-5 bg-[#051c69] z-10 sm:sticky fixed top-20 left-0 right-0">
                <div className="relative max-w-screen-lg md:space-y-0 space-y-3 mx-auto md:flex flex-wrap items-center justify-between leading-5">
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
                    <div className="md:hidden cursor-pointer" onClick={handleClickSidebar}>
                        <Menu color="#fff" size={30} />
                    </div>
                    <div className="flex justify-center text-2xl font-medium leading-10 items-center text-[#f0ea1f]">
                        TƯƠI NGON TỪ NGUỒN
                    </div>

                    {/* Search form */}
                    <SearchForm />

                    {/* Cart MB */}
                    <Link href={"/cart"} className="md:hidden absolute md:top-0 -top-3 md:right-0 right-5 flex justify-center text-sm items-center text-white hover:text-[#f0ea1f] cursor-pointer">
                        <div className="cart-icon relative">
                            <ShoppingCart size={30} />
                            <div className="bg-red-500 text-white px-2 py-1 rounded-full absolute -top-4 -right-4 hover:text-[#f0ea1f] ">{cart?.length ? cart.length : 0}</div>
                        </div>
                    </Link>

                    {/* Cart PC */}
                    <HoverCard openDelay={200} >
                        <HoverCardTrigger>
                            <Link href={"/cart"} className="md:flex hidden justify-center text-sm items-center text-white hover:text-[#f0ea1f] cursor-pointer">
                                <div className="cart-icon relative">
                                    <ShoppingCart size={30} />
                                    <div className="bg-red-500 text-white px-2 py-1 rounded-full absolute -top-4 -right-4 hover:text-[#f0ea1f]">{cart?.length ? cart.length : 0}</div>
                                </div>
                            </Link>
                        </HoverCardTrigger>
                        <HoverCardContent className="px-0">
                            <div className="p-2">
                                {
                                    cart?.map((cartItem) => {
                                        return (
                                            <div key={cartItem.id}>
                                                <div className="grid grid-cols-3 gap-2">
                                                    <div className="col-span-1">
                                                        <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                                                            <img src={cartItem?.image} alt={cartItem?.name} />
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <div className="flex justify-between">
                                                            <div className="text-sm">{cartItem?.name}</div>
                                                            <div className="text-sm font-bold">{cartItem?.quantity}</div>
                                                            <div className="text-sm">
                                                                <Trash size={16} />
                                                            </div>
                                                        </div>
                                                        <div className="mt-3">{cartItem?.price}đ</div>
                                                    </div>

                                                </div>
                                                <div className="my-3 flex justify-between">
                                                    <div className="font-bold">
                                                        Tổng tiền:
                                                    </div>
                                                    <div className="font-bold text-blue-500">
                                                        {cartItem?.price}đ
                                                    </div>

                                                </div>
                                                <Link href={"/cart"}>
                                                    <div className="bg-blue-500 font-bold text-white py-2 px-4 text-center rounded-md ">Xem giỏ hàng</div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </div>

            {/* menu service */}
            <div className="relative leading-5 bg-[#051c69] border-t-[1px] border-t-white hidden md:block">

                <div className="max-w-screen-xl mx-auto grid grid-cols-5 text-center leading-5 gap-4">
                    <div className="">
                        {
                            pathName !== '/' ?
                                <HoverCard openDelay={200}>
                                    <HoverCardTrigger>
                                        <div className="p-4 flex items-center bg-[#f0ea1f]">
                                            <Menu />
                                            <h1 className="text-[15px] ml-3 text-xl text-gray-900 font-bold">Danh mục</h1>
                                        </div>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="px-0">
                                        <div className="hidden md:block duration-1000
                                            p-2 w-[245px] overflow-y-auto text-center">
                                            <div className="text-gray-900 text-xl">
                                                <Link href={"/danh-muc/ban-chay-nhat"} className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer border-b-2 hover:bg-gray-300">
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
                                    </HoverCardContent>
                                </HoverCard>
                                :
                                <div className="p-4 flex items-center bg-[#f0ea1f]">
                                    <Menu />
                                    <h1 className="text-[15px] ml-3 text-xl text-gray-900 font-bold">Danh mục</h1>
                                </div>
                        }
                    </div>
                    <Link href={"/page/chinh-sach-bao-hanh-va-doi-tra"} className="flex text-left self-stretch text-white font-medium text-xs leading-5 uppercase hover:bg-[#f0ea1f] p-2 rounded-sm space-x-2">
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
                    </Link>
                    <Link href={"/page/chinh-sach-bao-hanh-va-doi-tra"} className="flex text-left self-stretch text-white font-medium text-xs leading-5 uppercase hover:bg-[#f0ea1f] p-2 rounded-sm space-x-2">
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
                    </Link>
                    <Link href={"/page/chinh-sach-bao-hanh-va-doi-tra"} className="flex text-left self-stretch text-white font-medium text-xs leading-5 uppercase hover:bg-[#f0ea1f] p-2 rounded-sm space-x-2">
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
                    </Link>
                    <Link href={"/page/chinh-sach-giao-hang"} className="flex text-left text-white font-medium text-xs leading-5 uppercase hover:bg-[#f0ea1f] p-2 rounded-sm space-x-2">
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
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header