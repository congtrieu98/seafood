'use client'

import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext<ICart[]>({
  //@ts-ignore
  cart: [],
});

interface ICart {
  id: string,
  name: string,
  price: number,
  image: string,
  stock: number,
  seller: boolean,
  quantity: number
}

export const CartProvider = ({ children }: { children: React.ReactNode; }) => {
  const [cart, setCart] = useState<ICart[]>([]);

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart")!)
        : []
    );
  };

  const addItemToCart = async ({
    id,
    name,
    price,
    image,
    stock,
    seller,
    quantity = 1,
  }: ICart) => {
    const item = {
      id,
      name,
      price,
      image,
      stock,
      seller,
      quantity,
    };

    //@ts-ignore
    const isItemExist = cart?.cartItems?.find(
      //@ts-ignore
      (i) => i.id === item.id
    );

    let newCartItems;

    if (isItemExist) {
      //@ts-ignore
      newCartItems = cart?.cartItems?.map((i) =>
        i.id === isItemExist.id ? item : i
      );
    } else {
      //@ts-ignore
      newCartItems = [...(cart?.cartItems || []), item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const deleteItemFromCart = (id: string) => {
    // @ts-ignore
    const newCartItems = cart?.cartItems?.filter((i) => i.id !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  return (
    <CartContext.Provider
      value={{
        //@ts-ignore
        cart,
        addItemToCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
