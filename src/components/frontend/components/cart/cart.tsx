/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useContext } from "react";

import CartContext from "@/lib/context/cartContext";
import Link from "next/link";
import BreadCrumb from "../breadCrumb/breadCrumb";
import { ArrowBigLeft, Minus, MoveLeft, Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Cart = () => {
    //@ts-ignore
    const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);

    //@ts-ignore
    const increaseQty = (cartItem) => {
        const newQty = cartItem?.quantity + 1;
        const item = { ...cartItem, quantity: newQty };

        if (newQty > Number(cartItem.stock)) return;

        addItemToCart(item);
    };

    //@ts-ignore
    const decreaseQty = (cartItem) => {
        const newQty = cartItem?.quantity - 1;
        const item = { ...cartItem, quantity: newQty };

        if (newQty <= 0) return;

        addItemToCart(item);
    };

    const amountWithoutTax = cart?.cartItems?.reduce(
        //@ts-ignore
        (acc, item) => acc + item.quantity * item.price,
        0
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
                <div>Có {cart?.cartItems?.length || 0} sản phẩm trong giỏ hàng</div>
                <div className="tems-center text-center flex justify-center">
                    <div className="h-1.5 bg-blue-500 w-40"></div>
                </div>
            </div>

            {cart?.cartItems?.length > 0 ? (
                <section className="py-10">
                    <div className="container max-w-screen-xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <main className="md:w-3/4">
                                <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                                    {
                                        //@ts-ignore
                                        cart?.cartItems?.map((cartItem) => (
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
                                                                    {" "}
                                                                    Seller: {cartItem.seller}
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
                                                                {cartItem.price * cartItem.quantity.toFixed(2)}đ
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
                                                {cart?.cartItems?.reduce(
                                                    //@ts-ignore
                                                    (acc, item) => acc + item.quantity,
                                                    0
                                                )}{" "}
                                                (Units)
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
        </>
    );
};

export default Cart;