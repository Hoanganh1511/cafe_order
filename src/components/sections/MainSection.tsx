"use client";
import React from "react";
import Image from "next/image";
import Card from "../Card";
import { Product } from "@/types";
const cafeList: Product[] = [
  {
    id: 1,
    title: "Bơ Arabica",
    price: 20000,
    image: "/assets/images/foods/cafe_1.webp",
  },
  {
    id: 2,
    title: "Đường Đen Sữa Đá",
    price: 25000,
    image: "/assets/images/foods/cafe_2.webp",
  },
  {
    id: 3,
    title: "The Coffee House Sữa Đá",
    price: 32000,
    image: "/assets/images/foods/cafe_3.webp",
  },
  {
    id: 4,
    title: "Bạc Xỉu",
    price: 26000,
    image: "/assets/images/foods/cafe_4.webp",
  },
  {
    id: 5,
    title: "Bạc Xỉu Nóng",
    price: 26000,
    image: "/assets/images/foods/cafe_5.webp",
  },
  {
    id: 6,
    title: "Cà Phê Đen Nóng",
    price: 30000,
    image: "/assets/images/foods/cafe_6.webp",
  },
  {
    id: 7,
    title: "Cà Phê Sữa Nóng",
    price: 26000,
    image: "/assets/images/foods/cafe_7.webp",
  },
  {
    id: 8,
    title: "Cà Phê Đen Đá",
    price: 26000,
    image: "/assets/images/foods/cafe_8.webp",
  },
  {
    id: 9,
    title: "Cà Phê Sữa Đá",
    price: 26000,
    image: "/assets/images/foods/cafe_9.webp",
  },
  {
    id: 10,
    title: "Bạc Xỉu Lắc Sữa Yến Mạch",
    price: 35000,
    image: "/assets/images/foods/cafe_10.webp",
  },
  {
    id: 11,
    title: "Bơ Arabica",
    price: 20000,
    image: "/assets/images/foods/cafe_1.webp",
  },
  {
    id: 12,
    title: "Đường Đen Sữa Đá",
    price: 25000,
    image: "/assets/images/foods/cafe_2.webp",
  },
  {
    id: 13,
    title: "The Coffee House Sữa Đá",
    price: 32000,
    image: "/assets/images/foods/cafe_3.webp",
  },
  {
    id: 14,
    title: "Bạc Xỉu",
    price: 26000,
    image: "/assets/images/foods/cafe_4.webp",
  },
  {
    id: 15,
    title: "Bạc Xỉu Nóng",
    price: 26000,
    image: "/assets/images/foods/cafe_5.webp",
  },
];
const MainSection = () => {
  return (
    <div className="grid grid-cols-12 gap-[30px]">
      {cafeList.map((item: any, idx: any) => {
        return (
          <Card key={idx} idx={idx + 1} item={item} className="col-span-3" />
        );
      })}
    </div>
  );
};

export default MainSection;
