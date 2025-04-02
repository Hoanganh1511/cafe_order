"use client";
import {
  getDataSession,
  LOCAL_STORAGE,
  setDataSession,
} from "@/lib/helpers/session";
import { CartItem, Product } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";
interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
}
const CartContext = createContext<CartContextValue>({
  cartItems: [],
  addToCart: () => {},
  //   removeFromCart: () => {},
  //   udpateCartItemQuantity: () => {},
  //   cartTotal: 0,
  //   cartCount: 0,
});
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const localDataCart = getDataSession(LOCAL_STORAGE, "cart");
  }, [cartItems]);
  const addToCart = (product: Product) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item: any) => item.product.id === product.id
    );

    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);
    }
    setDataSession(LOCAL_STORAGE, "cart", cartItems);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  if (CartContext === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return useContext(CartContext);
};
