import Image from "next/image";
import React from "react";

interface IAuthLayout {
  children: React.JSX.Element[] | React.JSX.Element;
}

export default function AuthLayout({ children }: IAuthLayout) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-4 p-4 min-h-screen w-screen bg-[#F6F8F8]">
      <div className="hidden md:flex h-full w-full bg-[url('/bgImg.png')] bg-[length:100%_100%] bg-no-repeat justify-start items-start p-4">
        <Image
          src={"/Group 52776.svg"}
          alt="group"
          height={100}
          width={100}
          quality={100}
        />
      </div>
      <div className="flex w-full h-full bg-[#FFFFFF] place-items-center justify-center">
        {children}
      </div>
    </div>
  );
}
