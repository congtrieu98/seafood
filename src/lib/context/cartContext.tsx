'use client'

import React, { createContext, useState, useEffect, useContext } from 'react';


export interface ICart {
  id: string,
  name: string,
  price: number,
  image: string,
  stock: number,
  quantity: number,
  salling: boolean
}

interface CartContextType {
  cart: ICart[];
  addItemToCart: (item: ICart) => void;
  deleteItemFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

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

  const addItemToCart = async (item: ICart) => {

    const isItemExist = cart?.find(

      (i) => i.id === item.id
    );

    let newCartItems;

    if (isItemExist) {
      //@ts-ignore
      newCartItems = cart?.map((i) =>
        i.id === isItemExist.id ? item : i
      );
    } else {
      //@ts-ignore
      newCartItems = [...cart, item];
    }

    localStorage.setItem("cart", JSON.stringify(newCartItems));
    setCartToState();
  };

  const deleteItemFromCart = (id: string) => {
    // @ts-ignore
    const newCartItems = cart?.filter((i) => i.id !== id);

    localStorage.setItem("cart", JSON.stringify(newCartItems));
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

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
