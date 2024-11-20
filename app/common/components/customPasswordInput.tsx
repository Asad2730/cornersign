"use client";
import Image from "next/image";
import { useState } from "react";
import { onClickStyle } from "../style/styles";

interface ICustomPasswordInput {
  placeHolder?: string;
  iconSize?: number;
}

export const CustomPasswordInput = ({
  placeHolder,
  iconSize = 20,
}: ICustomPasswordInput) => {
  const [type, setType] = useState("password");

  const handleChange = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <div className="relative">
      <input
        placeholder={placeHolder}
        className="pr-10 pl-3 block w-full rounded-md border border-[#CCCCCC] py-1.5 
          shadow-sm placeholder:text-[#97A9AC] sm:text-sm sm:leading-6 text-black"
        type={type}
      />
      <div
        onClick={handleChange}
        className={`absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer ${onClickStyle}`}
      >
        <Image
          src={"/Eye---Slash.svg"}
          alt="toggle visibility"
          height={iconSize}
          width={iconSize}
          quality={100}
          priority={true}
        />
      </div>
    </div>
  );
};
