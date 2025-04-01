"use client";
import React, { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";
import { toast } from "sonner";
import {
  getDataSession,
  LOCAL_STORAGE,
  setDataSession,
} from "@/lib/helpers/session";
const Card = ({
  item,
  idx,
  className,
}: {
  item: any;
  idx: number;
  className?: string;
}) => {
  const [amount, setAmount] = useState(1);
  const maxAmount = 10;
  const minAmount = 0;
  const increase = () => {
    if (amount < maxAmount) {
      setAmount((prevAmount) => prevAmount + 1);
    }
  };

  const decrease = () => {
    if (amount > minAmount) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };
  // if (idx !== 0 && idx % 5 === 0) {
  //   return (
  //     <div className="relative col-span-2 w-full p-[12px]  rounded-[35px]">
  //       <span className="absolute bottom-[-8px] top-0 left-0 w-full h-[1px] border-b-[1px] border-gray-200" />
  //       <div className=" flex justify-center">
  //         <Image
  //           src="/assets/images/foods/default-food.jpg"
  //           alt=""
  //           width={7050}
  //           height={4883}
  //           className="w-[300px] rounded-[8px]"
  //         />
  //       </div>
  //       <div className="mt-[20px] group-btn flex flex-col gap-y-[12px]">
  //         <p className="text-center">Sushi Nhật Bản 123</p>
  //         {/* Count Amount */}
  //         <div className="flex items-center justify-center py-[12px] ">
  //           <div className="flex items-center gap-x-[12px]">
  //             <button
  //               onClick={decrease}
  //               disabled={amount <= minAmount}
  //               className="btn-neu-type-1 size-[34px] bg-gray-300  text-[20px] text-gray-700 rounded-l-lg disabled:opacity-50 rounded-[8px]"
  //             >
  //               -
  //             </button>
  //             <span className="size-[40px] flex items-center justify-center bg-white rounded-[8px]">
  //               {amount}
  //             </span>
  //             <button
  //               onClick={increase}
  //               disabled={amount >= maxAmount}
  //               className="btn-neu-type-1 size-[34px] bg-gray-300 text-[20px] text-gray-700 rounded-r-lg disabled:opacity-50 rounded-[8px]"
  //             >
  //               +
  //             </button>
  //           </div>
  //         </div>
  //         <button className="mt-[12px]  relative flex items-center justify-center py-[12px] text-white bg-[#F26716] hover:brightness-[115%] duration-200 rounded-[25px]">
  //           Thêm vào giỏ hàng
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }
  const addToCart = (id: number, name: string, amount_count: number) => {
    const cart = getDataSession(LOCAL_STORAGE, "cart") || [];
    const existingProductIndex = cart.findIndex((item: any) => item.id === id);

    if (existingProductIndex > -1) {
      // Nếu sản phẩm đã có trong giỏ, tăng số lượng lên
      cart[existingProductIndex].quantity += amount_count;
    } else {
      // Nếu sản phẩm chưa có trong giỏ, thêm sản phẩm mới vào giỏ
      cart.push({
        id: id,
        name: name,
        quantity: amount_count,
      });
    }
    setDataSession(LOCAL_STORAGE, "cart", cart);
    setAmount(1);
    toast.success(`${item.title} x ${amount} được thêm vào giỏ hàng !`);
  };
  return (
    <div className={cn(`relative  w-full p-[12px]  rounded-[35px]`, className)}>
      <div className="flex justify-center">
        <Image
          src={item.image ?? "/assets/images/foods/default-food.jpg"}
          alt=""
          width={500}
          height={500}
          className="w-[180px] object-contain rounded-[8px]"
        />
      </div>
      <div className="mt-[12px] group-btn flex flex-col gap-y-[12px]">
        <p className="text-center text-[20px] font-semibold">{item.title}</p>
        <p className="text-center text-[18px]">{item.price}đ</p>
        {/* Count Amount */}
        <div className="flex items-center justify-center py-[6px] ">
          <div className="flex items-center gap-x-[12px]">
            <button
              onClick={decrease}
              disabled={amount <= minAmount}
              className="btn-neu-type-1 size-[34px] bg-gray-300  text-[20px]  font-medium text-gray-700 hover:text-[#af8f6f] rounded-l-lg disabled:opacity-40 disabled:pointer-events-none rounded-[8px]"
            >
              -
            </button>
            <span className="size-[32px] flex items-center justify-center bg-white font-bold rounded-[8px]">
              {amount}
            </span>
            <button
              onClick={increase}
              disabled={amount >= maxAmount}
              className="btn-neu-type-1 size-[34px] bg-gray-300 text-[20px] font-medium text-gray-700 hover:text-[#af8f6f] rounded-r-lg disabled:opacity-40 disabled:pointer-events-none rounded-[8px]"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => addToCart(idx, item.title, amount)}
          className="mt-[12px]  relative flex items-center justify-center py-[12px] font-medium text-white bg-[#AF8F6F] hover:bg-[#74512D] duration-200 rounded-[25px]"
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default Card;
