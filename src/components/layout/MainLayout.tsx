import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Header />
      <div className="flex h-[calc(100vh-var(--header-height))] ">
        <Sidebar />
        <div className="flex-1 w-full h-full overflow-y-scroll">
          <div className="px-[20px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
