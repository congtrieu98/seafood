import React from "react";
import { CartProvider } from "../context/cartContext";

export function CartGlobalProvider({ children }: { children: React.ReactNode }) {
    return <CartProvider>{children}</CartProvider>
}