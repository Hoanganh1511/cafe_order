"use client";
import React from "react";
import { CartProvider } from "./CartProvider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default AppProviders;
