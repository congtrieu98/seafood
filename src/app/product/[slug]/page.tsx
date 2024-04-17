/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

'use client'
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Gift, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


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
    return (
        <div className="max-w-screen-xl mx-auto md:px-0 px-4">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-4 md:mt-10 pt-4">
                <div className="col-span-3">
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

                        <div className="">
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
                                                                    <SelectItem value="apple">Apple</SelectItem>
                                                                    <SelectItem value="banana">Banana</SelectItem>
                                                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                                                    <SelectItem value="grapes">Grapes</SelectItem>
                                                                    <SelectItem value="pineapple">Pineapple</SelectItem>
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
                                                                    <SelectItem value="apple">Apple</SelectItem>
                                                                    <SelectItem value="banana">Banana</SelectItem>
                                                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                                                    <SelectItem value="grapes">Grapes</SelectItem>
                                                                    <SelectItem value="pineapple">Pineapple</SelectItem>
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
                                                                    <SelectItem value="apple">Apple</SelectItem>
                                                                    <SelectItem value="banana">Banana</SelectItem>
                                                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                                                    <SelectItem value="grapes">Grapes</SelectItem>
                                                                    <SelectItem value="pineapple">Pineapple</SelectItem>
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
                                                                    <SelectItem value="apple">Apple</SelectItem>
                                                                    <SelectItem value="banana">Banana</SelectItem>
                                                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                                                    <SelectItem value="grapes">Grapes</SelectItem>
                                                                    <SelectItem value="pineapple">Pineapple</SelectItem>
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


                        </div>

                    </div>
                </div>

                <div className="col-span-1">
                    Tu van dat hang
                </div>
            </div>


        </div>
    );
}
