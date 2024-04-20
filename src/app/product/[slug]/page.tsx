/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

'use client'
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AlignRight, Gift, Map, MapPin, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import Tabs from "@/components/frontend/components/tabs/tabs";


export default function ProductDetail() {
    const [qty, setQty] = useState(0)

    const handleUnIncrement = () => {
        const newQty = qty - 1
        setQty(newQty)
    }

    const handleIncrement = () => {
        const newQty = qty + 1
        setQty(newQty)

    }

    const tags = [
        '220 Đường số 3, Bình Hưng Hoà B, Bình Tân, TP.HCM',
        'F5/3E tổ 16, Ấp 6C, xã Vĩnh Lộc A, Bình Chánh, TP.HCM'
    ].map(
        (item) => item
    )
    return (
        <div className="max-w-screen-xl mx-auto md:px-0 px-4">
            <div className="grid md:grid-cols-5 grid-cols-1 md:gap-4 gap-0 md:mt-10 pt-4">
                <div className="lg:col-span-4 col-span-3 md:pl-4 pl-0">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                        <div className="sm:mt-0 mt-32">
                            <Carousel showArrows={true}>
                                <div>
                                    <img src="https://product.hstatic.net/1000182631/product/img_3089_62f216fb3eef451ba4d96038b71a7d70_master.jpg" />
                                </div>
                                <div>
                                    <img src="https://product.hstatic.net/1000182631/product/z5283249145272_e2dedfa5565fa3f51f52969a445ed089_2fdc3af97dd94e12a2559abcb126d061_master.jpg" />
                                </div>
                                <div>
                                    <img src="https://product.hstatic.net/1000182631/product/z5283249145421_39cf43ef86cf35dc335732885c17cdcf_5da01a3c043649af97b5eda216a8d084_master.jpg" />
                                </div>
                                <div>
                                    <img src="https://product.hstatic.net/1000182631/product/seeding_ghe_5_3ad93dffa96e4c5cb54360d11db98428_master.jpeg" />
                                </div>
                                <div>
                                    <img src="https://product.hstatic.net/1000182631/product/thitghexanhhap_f3adb1f909a54db8b3e1530ea0e01b3a_master.jpg" />
                                </div>

                            </Carousel>
                        </div>

                        <div className="md:px-0 px-4">
                            {/* title */}
                            <div className="text-xl font-medium mb-10">Ghe Xanh Laoi 1 - Song</div>
                            {/* Content */}
                            <div className="">
                                <div>Xuất sứ: Phan Thiết - Viết Nam</div>
                                <div>Trọng lượng: 3 - 4 con/kg</div>
                                <div>Hàng thiên nhiên có quanh năm. Theo kinh nghiệm của ngư dân, thời điểm mua ghẹ ngon phụ thuộc vào mùa nước.
                                    Ghẹ ngon vào những ngày đầu tháng hay cuối tháng, thời điểm ghẹ nhiều, thịt béo và chắc.
                                </div>
                                <div>Hàng tưới sống, giao hàng nhanh</div>
                                <div>Cam kết 1 đổi 1 nếu không đạt chất lượng</div>
                                <div>Không Dùng Hàng Ngộp - Không Dùng Hàng Đông Lạnh Chế Biến Món</div>
                                <div>Chỉ Cân Hàng Không Cân Nước</div>
                                <div>Gọi Ngay Hotline 📞0906789543📞 Để Được Tư Vấn Và Mua Hàng</div>
                            </div>
                            <div className="bg-pink-50 p-4">
                                <div className="flex justify-start gap-2 text-center flex-wrap">
                                    <div className="text-blue-500 font-bold text-xl">690.000đ</div>
                                    <div className="text-[#939393] line-through font-medium">890.000đ</div>
                                    <div className="flex items-center px-2 py-1 bg-red-500 text-white rounded-md">
                                        <span className="font-bold text-lg">-19%</span>
                                    </div>
                                </div>
                                <div className="text-gray-400">
                                    Khối lượng: 1kg
                                </div>
                            </div>

                            <div className="my-5">
                                <div className="space-y-4">
                                    <div className="font-bold">Chọn:</div>
                                    <RadioGroup defaultValue="default">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="default" id="r1" />
                                                <Label htmlFor="r1">1 kg (size 4 - 5 con)</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="comfortable" id="r2" />
                                                <Label htmlFor="r2">0,5 kg</Label>
                                            </div>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>
                            <div className="mt-4 border border-red-600 rounded-lg">
                                <div className="flex px-2 py-3 bg-red-600 space-x-2 rounded-t-lg">
                                    <Gift color="#ffff" />
                                    <div className="text-white font-bold">Khuyến mãi</div>
                                </div>
                                <div className="px-2 py-3 space-y-2">
                                    <div>🎁 Miễn phí hấp + Tặng sốt chấm muối ớt hồng trứ danh</div>
                                    <div>🎁 Tặng 50,000đ Khi Đăng Ký Thành Viên</div>
                                    <div>🔥 Ưu Đãi Thành Viên Lên Đến 10%</div>
                                </div>

                            </div>
                            <div className="mt-4">
                                <div className="font-bold flex justify-start mt-3">Số lượng:
                                    <button className="ml-5 p-1.5 bg-gray-200 rounded-sm" disabled={qty === 0} onClick={handleUnIncrement}><Minus size={18} /></button>
                                    <input value={qty} className="w-3/12 text-center" onChange={(e) => { setQty(Number(e.target.value)) }} />
                                    <button className="p-1.5 bg-gray-200 rounded-sm" onClick={handleIncrement}><Plus size={18} /></button>
                                </div>
                            </div>
                            <div className="flex justify-center gap-4 mt-4">
                                <button className="px-4 py-2 text-xl text-white bg-blue-500 uppercase rounded-md">Thêm vào giỏ</button>
                                <button className="px-4 py-2 text-xl text-white bg-red-700 uppercase rounded-md">Mua ngay</button>
                            </div>


                            {/* FIELD NOTE */}

                            <div className="py-2">
                                Do đặc tính của sản phẩm nên trọng lượng thực tế có thể chênh lệch so với số lượng bạn đặt hàng. Hải Sản Hoàng Gia sẽ xác nhận lại với bạn khi có sự thay đổi.
                            </div>



                            {/* ======= THƯỜNG ĐC CHẾ BIẾN ======== */}


                            <div className="py-4">
                                <div className="font-bold uppercase mb-3">
                                    thường được chế biến
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="terms" />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div>
                                                        <img className="rounded-md" src="https://product.hstatic.net/1000182631/product/nuong_muoi_b431913ee39d48f7b953b92a55b8f8f2_small.jpg" alt="" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div>Phí nướng muối ớt</div>
                                                        <Select defaultValue="apple">
                                                            <SelectTrigger className="w-full py-0">
                                                                <SelectValue placeholder="Select a fruit" />
                                                            </SelectTrigger>
                                                            <SelectContent >
                                                                <SelectGroup>
                                                                    <SelectItem value="apple">{"1 món (< 500gram)"}</SelectItem>
                                                                    <SelectItem value="banana">{"2 món (< 1kg)"}</SelectItem>
                                                                    <SelectItem value="blueberry">{"3 món (< 1.5kg)"}</SelectItem>
                                                                </SelectGroup>
                                                            </SelectContent>
                                                        </Select>
                                                        <div className="text-blue-500 font-semibold">38.000đ</div>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="terms" />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div className="">
                                                        <img src="https://product.hstatic.net/1000182631/product/nuong_muoi_b431913ee39d48f7b953b92a55b8f8f2_small.jpg" alt="" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div>Phí ncháy tỏi</div>
                                                        <Select defaultValue="apple">
                                                            <SelectTrigger className="w-full py-0">
                                                                <SelectValue placeholder="Select a fruit" />
                                                            </SelectTrigger>
                                                            <SelectContent >
                                                                <SelectGroup>
                                                                    <SelectItem value="apple">{"1 món (< 500gram)"}</SelectItem>
                                                                    <SelectItem value="banana">{"2 món (< 1kg)"}</SelectItem>
                                                                    <SelectItem value="blueberry">{"3 món (< 1.5kg)"}</SelectItem>
                                                                </SelectGroup>
                                                            </SelectContent>
                                                        </Select>
                                                        <div className="text-blue-500 font-semibold">40.000đ</div>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="terms" />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div className="">
                                                        <img src="https://product.hstatic.net/1000182631/product/nuong_muoi_b431913ee39d48f7b953b92a55b8f8f2_small.jpg" alt="" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div>Phí nướng muối ớt</div>
                                                        <Select defaultValue="apple">
                                                            <SelectTrigger className="w-full py-0">
                                                                <SelectValue placeholder="Select a fruit" />
                                                            </SelectTrigger>
                                                            <SelectContent >
                                                                <SelectGroup>
                                                                    <SelectItem value="apple">{"1 món (< 500gram)"}</SelectItem>
                                                                    <SelectItem value="banana">{"2 món (< 1kg)"}</SelectItem>
                                                                    <SelectItem value="blueberry">{"3 món (< 1.5kg)"}</SelectItem>
                                                                </SelectGroup>
                                                            </SelectContent>
                                                        </Select>
                                                        <div className="text-blue-500 font-semibold">38.000đ</div>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="terms" />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div className="">
                                                        <img src="https://product.hstatic.net/1000182631/product/nuong_muoi_b431913ee39d48f7b953b92a55b8f8f2_small.jpg" alt="" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div>Phí ncháy tỏi</div>
                                                        <Select defaultValue="apple">
                                                            <SelectTrigger className="w-full py-0">
                                                                <SelectValue placeholder="Select a fruit" />
                                                            </SelectTrigger>
                                                            <SelectContent >
                                                                <SelectGroup>
                                                                    <SelectItem value="apple">{"1 món (< 500gram)"}</SelectItem>
                                                                    <SelectItem value="banana">{"2 món (< 1kg)"}</SelectItem>
                                                                    <SelectItem value="blueberry">{"3 món (< 1.5kg)"}</SelectItem>
                                                                </SelectGroup>
                                                            </SelectContent>
                                                        </Select>
                                                        <div className="text-blue-500 font-semibold">40.000đ</div>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="py-4 items-center text-end">
                                <div className="mb-3"><span className=" font-semibold">Tổng tiền:</span> <span className="font-bold text-blue-500">10.000.000đ</span></div>
                                <button className="py-2 px-4 bg-blue-500 text-white rounded-md uppercase font-semibold hover:shadow-lg">Thêm vào giỏ hàng</button>
                            </div>

                        </div>

                    </div>

                    {/* tabs component */}
                    <div className="border border-t border-t-blue-500"></div>
                    <Tabs />

                    {/* ======= Address ========  */}
                    <div className="mb-4 text-xl font-medium leading-none">Địa điểm đặt hàng</div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-10">
                        <div className="col-span-1">
                            <ScrollArea className="h-72 rounded-md border">
                                <div className="p-4">

                                    {tags.map((tag) => (
                                        <>
                                            <div key={tag} className="flex shadow-lg cursor-pointer p-2">
                                                <div className="flex items-center mr-2">
                                                    <MapPin size={18} />
                                                </div>
                                                {tag}
                                            </div>
                                            <Separator className="my-2" />
                                        </>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>
                        <div className="col-span-2">
                            <div className="w-full h-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.4653630735907!2d106.59320993052715!3d10.81201111612639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b99df9f5ae3%3A0x7accbea9ce724720!2zMjIwIMSQxrDhu51uZyBz4buRIDMsIELDrG5oIEjGsG5nIEhvw6AgQiwgQsOsbmggVMOibiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1713619924510!5m2!1svi!2s"
                                    className="border-none w-full h-[450px] rounded-[20px]"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="lg:col-span-1 col-span-2 pb-10 pr-3">
                    <div className="mb-1 bg-slate-100">
                        <div className="uppercase text-sm p-2 border-b border-b-slate-500 ">
                            Tư vấn đặt hàng
                        </div>
                        <div className="flex px-5 py-3">
                            <div className="mr-2 flex items-center">
                                <img src="https://theme.hstatic.net/1000182631/1000966139/14/hotline-icon.png?v=1110" alt="" />
                            </div>
                            <div className="">
                                <div className="font-bold text-orange-400">090 996 3514</div>
                                <div className="">8h-21h (từ T2 - Chủ Nhật)</div>
                            </div>
                        </div>
                    </div>
                    <Link href={"/page/chinh-sach-bao-hanh-va-doi-tra"} className="flex px-5 py-3 bg-slate-100">
                        <div className="mr-2 flex items-center">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1.png?v=1110" alt="" />
                        </div>
                        <div className="">
                            <div className="font-medium uppercase text-sm">CAM KẾT CHẤT LƯỢNG</div>
                            <div className="text-gray-400 text-xs">An toàn xuất xứ</div>
                        </div>
                    </Link>
                    <Link href={"/page/chinh-sach-bao-hanh-va-doi-tra"} className="flex px-5 py-3 bg-slate-100">
                        <div className="mr-2 flex items-center">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_2.png?v=1110" alt="" />
                        </div>
                        <div className="">
                            <div className="font-medium uppercase text-sm">1 đổi 1 trong 2h</div>
                            <div className="text-gray-400 text-xs">Nhanh chóng, tận nhà</div>
                        </div>
                    </Link>
                    <Link href={"/page/chinh-sach-bao-hanh-va-doi-tra"} className="flex px-5 py-3 bg-slate-100">
                        <div className="mr-2 flex items-center">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_3.png?v=1110" alt="" />
                        </div>
                        <div className="">
                            <div className="font-medium uppercase text-sm">Chuẩn đóng gói</div>
                            <div className="text-gray-400 text-xs">Sạch sẽ, tiện lợi</div>
                        </div>
                    </Link>
                    <Link href={"/page/chinh-sach-bao-hanh-va-doi-tra"} className="flex px-5 py-3 bg-slate-100 mb-1">
                        <div className="mr-2 flex items-center">
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/icon_4.png?v=1110" alt="" />
                        </div>
                        <div className="">
                            <div className="font-medium uppercase text-sm">Giao hàng nhanh</div>
                            <div className="text-gray-400 text-xs">Free ship</div>
                        </div>
                    </Link>

                    <div className="px-5 py-3 bg-slate-100 mb-1">
                        <div>
                            <img src="https://theme.hstatic.net/1000182631/1000966139/14/nhqa-icon.png?v=1110" alt="" />
                        </div>
                        <div className="">
                            <div className="pt-2 flex flex-wrap">
                                Liên hệ qua số: <span className="font-bold text-orange-400">090 996 3514</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-100 py-2">
                        <div className="bg-blue-500 p-2 flex justify-between">
                            <div className="text-white uppercase font-medium">CÓ THỂ BẠN MUỐN XEM THÊM</div>
                            <AlignRight color="#fff" />
                        </div>

                        <div className="p-2">
                            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg bg-white">
                                <Link href={"/product/ghe-xanh-loai-1-song"} className="relative">
                                    <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                                    <img src="https://product.hstatic.net/1000182631/product/z5283249145272_e2dedfa5565fa3f51f52969a445ed089_2fdc3af97dd94e12a2559abcb126d061_medium.jpg" alt="hello" className="w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300" />
                                </Link>
                                <Link href={"/product/ghe-xanh-loai-1-song"} className="pt-2 font-semibold flex seafood_truncate-1 items-center text-center hover:text-blue-500">Ghẹ xanh loại 1-sống</Link>
                                <div className="flex justify-center gap-2 text-center flex-wrap">
                                    <div className="text-blue-500 font-bold text-sm">690.000đ</div>
                                    <div className="text-[#939393] line-through font-medium text-sm">690.000đ</div>
                                    <div className="bg-orange-500 rounded-md text-xs p-1 items-center">-45%</div>
                                </div>

                                <div className="flex justify-center items-center text-center pb-5">
                                    <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                                </div>
                            </div>

                        </div>
                        {/* item 1 */}

                        <div className="p-2">
                            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg bg-white">
                                <Link href={"/product/ghe-xanh-loai-1-song"} className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                                    <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                                    <img src="https://product.hstatic.net/1000182631/product/z5283249145272_e2dedfa5565fa3f51f52969a445ed089_2fdc3af97dd94e12a2559abcb126d061_medium.jpg" alt="hello" className="w-full" />
                                </Link>
                                <Link href={"/product/ghe-xanh-loai-1-song"} className="pt-2 font-semibold flex seafood_truncate-1 items-center text-center hover:text-blue-500">Ghẹ xanh loại 1-sống</Link>
                                <div className="flex justify-center gap-2 text-center flex-wrap">
                                    <div className="text-blue-500 font-bold text-sm">690.000đ</div>
                                    <div className="text-[#939393] line-through font-medium text-sm">690.000đ</div>
                                    <div className="bg-orange-500 rounded-md text-xs p-1 items-center">-45%</div>
                                </div>

                                <div className="flex justify-center items-center text-center pb-5">
                                    <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                                </div>
                            </div>

                        </div>
                        {/* item 2 */}

                        <div className="p-2">
                            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg bg-white">
                                <Link href={"/product/ghe-xanh-loai-1-song"} className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
                                    <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                                    <img src="https://product.hstatic.net/1000182631/product/z5283249145272_e2dedfa5565fa3f51f52969a445ed089_2fdc3af97dd94e12a2559abcb126d061_medium.jpg" alt="hello" className="w-full" />
                                </Link>
                                <Link href={"/product/ghe-xanh-loai-1-song"} className="pt-2 font-semibold flex seafood_truncate-1 items-center text-center hover:text-blue-500">Ghẹ xanh loại 1-sống</Link>
                                <div className="flex justify-center gap-2 text-center flex-wrap">
                                    <div className="text-blue-500 font-bold text-sm">690.000đ</div>
                                    <div className="text-[#939393] line-through font-medium text-sm">690.000đ</div>
                                    <div className="bg-orange-500 rounded-md text-xs p-1 items-center">-45%</div>
                                </div>

                                <div className="flex justify-center items-center text-center pb-5">
                                    <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                                </div>
                            </div>

                        </div>
                        {/* item 3 */}

                        <div className="p-2">
                            <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg bg-white">
                                <Link href={"/product/ghe-xanh-loai-1-song"} className="relative ">
                                    <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                                    <img src="https://product.hstatic.net/1000182631/product/z5283249145272_e2dedfa5565fa3f51f52969a445ed089_2fdc3af97dd94e12a2559abcb126d061_medium.jpg" alt="hello" className="w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300" />
                                </Link>
                                <Link href={"/product/ghe-xanh-loai-1-song"} className="pt-2 font-semibold flex seafood_truncate-1 items-center text-center hover:text-blue-500">Ghẹ xanh loại 1-sống</Link>
                                <div className="flex justify-center gap-2 text-center flex-wrap">
                                    <div className="text-blue-500 font-bold text-sm">690.000đ</div>
                                    <div className="text-[#939393] line-through font-medium text-sm">690.000đ</div>
                                    <div className="bg-orange-500 rounded-md text-xs p-1 items-center">-45%</div>
                                </div>

                                <div className="flex justify-center items-center text-center pb-5">
                                    <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                                </div>
                            </div>

                        </div>
                        {/* item 4 */}
                    </div>

                </div>
            </div>

        </div>
    );
}
