"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
const tabs = [
  {
    id: 1,
    title: "Kem tươi",
    icon: "/assets/images/icons/sidebar_icon_1.png",
  },
  {
    id: 2,
    title: "Cafe",
    icon: "/assets/images/icons/sidebar_icon_2.png",
  },
  {
    id: 3,
    title: "Trà sữa",
    icon: "/assets/images/icons/sidebar_icon_3.png",
  },
  {
    id: 4,
    title: "Trà hoa quả",
    icon: "/assets/images/icons/sidebar_icon_4.png",
  },
];
const Sidebar = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="w-[300px] pr-[20px] pt-[20px] h-full border-r-[1px] border-black/10">
      <ul className="h-full flex flex-col">
        {tabs.map((tab, idx) => {
          const isActive = active === tab.id;
          return (
            <li
              key={idx}
              onClick={() => setActive(tab.id)}
              className={`
                ${
                  isActive
                    ? "text-[22px] text-black bg-[#F8F4E1] "
                    : " hover:bg-gray-100"
                }
                text-black/80 flex items-center justify-start py-[8px] px-[40px] font-semibold  cursor-pointer rounded-r-[90px] will-change-transform duration-200`}
            >
              <Image
                src={tab.icon}
                className={`${
                  isActive ? "scale-[1.05]" : " "
                } mr-[8px] will-change-transform`}
                alt=""
                width={60}
                height={60}
              />
              {tab.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
