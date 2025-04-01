"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdDiscount } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import CoreModal from "@/components/modal/CoreModal";
import { getDataSession, LOCAL_STORAGE } from "@/lib/helpers/session";

const Header = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [cartAmountStorage, setCartAmountStorage] = useState(0);
  const cart = getDataSession(LOCAL_STORAGE, "cart") || [];
  return (
    <>
      <CoreModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
      >
        <div className="px-[30px]">
          <p className="text-center">Hello from the modal!</p>
          <ul>
            {cart &&
              cart.map((item, idx) => {
                return <li key={idx} className=""></li>;
              })}
          </ul>
        </div>
      </CoreModal>{" "}
      <div className="relative w-full h-[var(--header-height)] bg-white max-w-screen-2xl mx-auto flex justify-between items-center">
        <span className="absolute top-full w-screen left-1/2 -translate-x-1/2 border-b-[1px] border-black/10" />
        <div className="flex  items-center">
          <div className="size-[40px] bg-black rounded-full mr-[12px]"></div>
          <Link
            href="/"
            className="font-semibold font-prompt uppercase text-[22px]"
          >
            Robo Drink
          </Link>
        </div>
        <ul className="flex items-center gap-x-[50px]">
          <li className="">
            <Link href="/" className="text-[20px] flex items-center">
              <IoHome className="mr-[12px]" />
              Trang chủ
            </Link>
          </li>
          <li className="">
            <Link href="#" className="text-[20px] flex items-center">
              <MdDiscount className="mr-[12px]" />
              Khuyến mãi
            </Link>
          </li>

          <li className="">
            <Link href="#" className="text-[20px] flex items-center">
              <FaCreditCard className="mr-[12px]" />
              Thanh toán
            </Link>
          </li>

          <li
            onClick={() => setShowPaymentModal(true)}
            className="cursor-pointer"
          >
            <div className="text-[20px] flex items-center">
              <div className="relative">
                <IoMdCart className="mr-[12px] text-orange-600 text-[30px]" />
                {cart?.length > 0 && (
                  <span className="absolute size-[18px] top-[-10px] right-[2px] text-[12px] text-white bg-red-500 flex items-center justify-center rounded-full">
                    {cart?.length}
                  </span>
                )}
              </div>

              <span className="font-semibold"> Giỏ hàng</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
