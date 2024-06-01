/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useContext } from "react";

import CartContext, { ICart, useCart } from "@/lib/context/cartContext";
import Link from "next/link";
import BreadCrumb from "../breadCrumb/breadCrumb";
import { ArrowBigLeft, Minus, MoveLeft, Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import CarouselPostGeneral from "../carouselMultiple/carouselPostGeneral";

const Cart = () => {
    const { addItemToCart, deleteItemFromCart, cart } = useCart();

    const increaseQty = (cartItem: ICart) => {
        const newQty = cartItem?.quantity + 1;
        const item = { ...cartItem, quantity: newQty };

        if (newQty > Number(cartItem.stock)) return;

        addItemToCart(item);
    };

    const decreaseQty = (cartItem: ICart) => {
        const newQty = cartItem?.quantity - 1;
        const item = { ...cartItem, quantity: newQty };

        if (newQty <= 0) return;

        addItemToCart(item);
    };

    const amountWithoutTax = cart?.reduce(
        (acc, item) => acc + item.quantity * item.price, 0
    );

    const taxAmount = (amountWithoutTax * 0.15).toFixed(2);

    const totalAmount = (Number(amountWithoutTax) + Number(taxAmount)).toFixed(2);

    return (
        <>
            <div className="bg-gray-200 sm:mb-0 mb-40">
                <BreadCrumb />
            </div>

            <div className="max-w-screen-xl mx-auto py-8 items-center text-center space-y-4 md:px-0 px-4">
                <div className="bg-blue-500 p-3 rounded-md">
                    <div className="font-medium text-yellow-400">
                        Chúng tôi biết bạn có nhiều lựa chọn, cám ơn bạn đã chọn sản phẩm của Hải sản Miền Nam
                    </div>
                </div>
                <div className="text-2xl font-bold">Giỏ hàng của bạn</div>
                <div>Có {cart?.length || 0} sản phẩm trong giỏ hàng</div>
                <div className="tems-center text-center flex justify-center">
                    <div className="h-1.5 bg-blue-500 w-40"></div>
                </div>
            </div>

            {cart?.length > 0 ? (
                <section className="py-10">
                    <div className="container max-w-screen-xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <main className="md:w-3/4">
                                <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                                    {
                                        cart?.map((cartItem: ICart) => (
                                            <div>
                                                <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                                                    <div className="w-full lg:w-2/5 xl:w-2/4">
                                                        <figure className="flex leading-5">
                                                            <div>
                                                                <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                                                                    <img src={cartItem.image} alt={cartItem.name} />
                                                                </div>
                                                            </div>
                                                            <figcaption className="ml-3">
                                                                <div>
                                                                    <Link href="#" className="hover:text-blue-600">
                                                                        {cartItem.name}
                                                                    </Link>
                                                                </div>
                                                                <div className="mt-1 text-gray-400">
                                                                    <span> salling: {cartItem.salling}</span>
                                                                </div>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                    <div className="w-24">
                                                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                                            <button
                                                                data-action="decrement"
                                                                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                                                onClick={() => decreaseQty(cartItem)}
                                                            >
                                                                <span className="m-auto text-2xl font-thin">
                                                                    <Minus size={16} />
                                                                </span>
                                                            </button>
                                                            <input
                                                                type="number"
                                                                className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900 custom-input-number"
                                                                name="custom-input-number"
                                                                value={cartItem.quantity}
                                                                readOnly
                                                            ></input>
                                                            <button
                                                                data-action="increment"
                                                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                                                onClick={() => increaseQty(cartItem)}
                                                            >
                                                                <span className="m-auto text-2xl font-thin">
                                                                    <Plus size={16} />
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="leading-5">
                                                            <p className="font-semibold not-italic">
                                                                {cartItem.price * parseFloat(cartItem?.quantity.toFixed(2))}đ
                                                            </p>
                                                            <small className="text-gray-400">
                                                                {" "}
                                                                {cartItem.price}đ / kg{" "}
                                                            </small>
                                                        </div>
                                                    </div>
                                                    <div className="flex-auto">
                                                        <div className="float-right">
                                                            <button
                                                                className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                                                                onClick={() =>
                                                                    deleteItemFromCart(cartItem?.id)
                                                                }
                                                            >
                                                                <Trash size={16} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr className="my-4" />
                                            </div>
                                        ))}
                                </article>

                                <article className="bg-gray-200">
                                    <Textarea placeholder="Nhập ghi chú tại đây..." />
                                </article>
                            </main>
                            <aside className="md:w-1/4">
                                <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                                    <ul className="mb-5">
                                        {/* <li className="flex justify-between text-gray-600  mb-1">
                                            <span>Amount before Tax:</span>
                                            <span>${amountWithoutTax}</span>
                                        </li> */}
                                        <li className="flex justify-between text-gray-600  mb-1">
                                            <span>Tổng số lượng:</span>
                                            <span className="text-green-500">
                                                {cart?.reduce(
                                                    (acc, item) => acc + item.quantity, 0
                                                )}
                                                <span>Units</span>
                                            </span>
                                        </li>
                                        <li className="flex justify-between text-gray-600  mb-1">
                                            <span>TAX:</span>
                                            <span>{taxAmount}đ</span>
                                        </li>
                                        <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                                            <span>Tổng tiền:</span>
                                            <span>{totalAmount}đ</span>
                                        </li>
                                    </ul>

                                    <Link href="/" className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer">
                                        Tiến hành thanh toán
                                    </Link>

                                    <Link
                                        href="/"
                                        className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                                    >
                                        Tiếp tục mua hàng
                                    </Link>
                                </article>
                            </aside>
                        </div>
                    </div>
                </section>
            ) : (
                <div className="max-w-screen-xl mx-auto items-center text-center pb-10">
                    <div className="mb-10">Giỏ hàng của bạn đang trống</div>
                    <Link href={"/"} className="flex items-center text-center justify-center">

                        <Button variant={"ghost"} className="flex space-x-2 uppercase">
                            <MoveLeft size={18} />
                            <span>Tiếp tục mua hàng</span>
                        </Button>
                    </Link>
                </div>
            )}

            <div className="max-w-screen-xl mx-auto py-10 md:px-0 px-4">
                <div className="text-2xl text-center items-center font-bold mb-5">
                    Gợi Ý Sản Phẩm Đi Kèm
                </div>
                <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 ">
                    <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
                        <Link href={"/product/ghe-xanh-loai-1-song"} className="relative">
                            <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                            <img src="https://product.hstatic.net/1000182631/product/z5283249145272_e2dedfa5565fa3f51f52969a445ed089_2fdc3af97dd94e12a2559abcb126d061_medium.jpg" alt="hello" className="w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300" />
                        </Link>
                        <Link href={"/product/ghe-xanh-loai-1-song"} className="pt-2 font-medium flex seafood_truncate-1 items-center text-center">Ghẹ xanh loại 1-sống</Link>
                        <div className="flex justify-center gap-2 text-center flex-wrap">
                            <div className="text-blue-500 font-bold text-sm">690.000đ</div>
                            <div className="text-[#939393] line-through font-medium text-sm">690.000đ</div>
                            <div className="bg-orange-500 rounded-md text-xs p-1 items-center">-45%</div>
                        </div>

                        <div
                            role="button"
                            className="flex justify-center items-center text-center pb-5"
                        >
                            <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">Chọn mua</div>
                        </div>
                    </div>

                    <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
                        <Link href={"/product/ghe-xanh-loai-1-song"} className="relative">
                            <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                            <img src="https://product.hstatic.net/1000182631/product/z5283249145272_e2dedfa5565fa3f51f52969a445ed089_2fdc3af97dd94e12a2559abcb126d061_medium.jpg" alt="hello" className="w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300" />
                        </Link>
                        <Link href={"/product/ghe-xanh-loai-1-song"} className="pt-2 font-medium flex seafood_truncate-1 items-center text-center">Ghẹ xanh loại 1-sống</Link>
                        <div className="flex justify-center gap-2 text-center flex-wrap">
                            <div className="text-blue-500 font-bold text-sm">690.000đ</div>
                            <div className="text-[#939393] line-through font-medium text-sm">690.000đ</div>
                            <div className="bg-orange-500 rounded-md text-xs p-1 items-center">-45%</div>
                        </div>

                        <div className="flex justify-center items-center text-center pb-5">
                            <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                        </div>
                    </div>

                    <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
                        <Link href={"/product/ghe-xanh-loai-1-song"} className="relative">
                            <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                            <img src="https://product.hstatic.net/1000182631/product/z5283249145272_e2dedfa5565fa3f51f52969a445ed089_2fdc3af97dd94e12a2559abcb126d061_medium.jpg" alt="hello" className="w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300" />
                        </Link>
                        <Link href={"/product/ghe-xanh-loai-1-song"} className="pt-2 font-medium flex seafood_truncate-1 items-center text-center">Ghẹ xanh loại 1-sống</Link>
                        <div className="flex justify-center gap-2 text-center flex-wrap">
                            <div className="text-blue-500 font-bold text-sm">690.000đ</div>
                            <div className="text-[#939393] line-through font-medium text-sm">690.000đ</div>
                            <div className="bg-orange-500 rounded-md text-xs p-1 items-center">-45%</div>
                        </div>

                        <div className="flex justify-center items-center text-center pb-5">
                            <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                        </div>
                    </div>

                    <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
                        <Link href={"/product/ghe-xanh-loai-1-song"} className="relative">
                            <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                            <img src="https://product.hstatic.net/1000182631/product/z5283249145272_e2dedfa5565fa3f51f52969a445ed089_2fdc3af97dd94e12a2559abcb126d061_medium.jpg" alt="hello" className="w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300" />
                        </Link>
                        <Link href={"/product/ghe-xanh-loai-1-song"} className="pt-2 font-medium flex seafood_truncate-1 items-center text-center">Ghẹ xanh loại 1-sống</Link>
                        <div className="flex justify-center gap-2 text-center flex-wrap">
                            <div className="text-blue-500 font-bold text-sm">690.000đ</div>
                            <div className="text-[#939393] line-through font-medium text-sm">690.000đ</div>
                            <div className="bg-orange-500 rounded-md text-xs p-1 items-center">-45%</div>
                        </div>

                        <div className="flex justify-center items-center text-center pb-5">
                            <div className="text-center bg-blue-500 text-white py-1.5 px-4 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Chọn mua</div>
                        </div>
                    </div>

                    <div className="border rounded-sm p-2 space-y-2 hover:shadow-lg">
                        <Link href={"/product/ghe-xanh-loai-1-song"} className="relative">
                            <div className="absolute top-0 left-0 text-white text-sm p-1.5 bg-black bg-opacity-60 rounded-md">Có 2 lựa chọn</div>
                            <img src="https://product.hstatic.net/1000182631/product/z5283249145272_e2dedfa5565fa3f51f52969a445ed089_2fdc3af97dd94e12a2559abcb126d061_medium.jpg" alt="hello" className="w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300" />
                        </Link>
                        <Link href={"/product/ghe-xanh-loai-1-song"} className="pt-2 font-medium flex seafood_truncate-1 items-center text-center">Ghẹ xanh loại 1-sống</Link>
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
                <div className="my-10">
                    <CarouselPostGeneral />
                </div>
            </div>
        </>
    );
};

export default Cart;