"use client";
import React from "react";
import Image from "next/image";
import Card from "../Card";
const cafeList = [
  {
    title: "Bơ Arabica",
    price: 20000,
    image: "/assets/images/foods/cafe_1.webp",
  },
  {
    title: "Đường Đen Sữa Đá",
    price: 25000,
    image: "/assets/images/foods/cafe_2.webp",
  },
  {
    title: "The Coffee House Sữa Đá",
    price: 32000,
    image: "/assets/images/foods/cafe_3.webp",
  },
  {
    title: "Bạc Xỉu",
    price: 26000,
    image: "/assets/images/foods/cafe_4.webp",
  },
  {
    title: "Bạc Xỉu Nóng",
    price: 26000,
    image: "/assets/images/foods/cafe_5.webp",
  },
  {
    title: "Cà Phê Đen Nóng",
    price: 30000,
    image: "/assets/images/foods/cafe_6.webp",
  },
  {
    title: "Cà Phê Sữa Nóng",
    price: 26000,
    image: "/assets/images/foods/cafe_7.webp",
  },
  {
    title: "Cà Phê Đen Đá",
    price: 26000,
    image: "/assets/images/foods/cafe_8.webp",
  },
  {
    title: "Cà Phê Sữa Đá",
    price: 26000,
    image: "/assets/images/foods/cafe_9.webp",
  },
  {
    title: "Bạc Xỉu Lắc Sữa Yến Mạch",
    price: 35000,
    image: "/assets/images/foods/cafe_10.webp",
  },
  {
    title: "Bơ Arabica",
    price: 20000,
    image: "/assets/images/foods/cafe_1.webp",
  },
  {
    title: "Đường Đen Sữa Đá",
    price: 25000,
    image: "/assets/images/foods/cafe_2.webp",
  },
  {
    title: "The Coffee House Sữa Đá",
    price: 32000,
    image: "/assets/images/foods/cafe_3.webp",
  },
  {
    title: "Bạc Xỉu",
    price: 26000,
    image: "/assets/images/foods/cafe_4.webp",
  },
  {
    title: "Bạc Xỉu Nóng",
    price: 26000,
    image: "/assets/images/foods/cafe_5.webp",
  },
  {
    title: "Cà Phê Đen Nóng",
    price: 30000,
    image: "/assets/images/foods/cafe_6.webp",
  },
  {
    title: "Cà Phê Sữa Nóng",
    price: 26000,
    image: "/assets/images/foods/cafe_7.webp",
  },
  {
    title: "Cà Phê Đen Đá",
    price: 26000,
    image: "/assets/images/foods/cafe_8.webp",
  },
  {
    title: "Cà Phê Sữa Đá",
    price: 26000,
    image: "/assets/images/foods/cafe_9.webp",
  },
  {
    title: "Bạc Xỉu Lắc Sữa Yến Mạch",
    price: 35000,
    image: "/assets/images/foods/cafe_10.webp",
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
