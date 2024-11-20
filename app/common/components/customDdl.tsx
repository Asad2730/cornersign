"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { onClickStyle } from "../style/styles";

interface ICustomDdl {
  placeHolder?: string;
  iconSize?: number;
  items: string[];
  hideStartIcon?: boolean;
}

export const CustomDdl = ({
  placeHolder,
  iconSize = 20,
  items,
  hideStartIcon = false,
}: ICustomDdl) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const style = `block w-full rounded-md border border-[#CCCCCC] py-1.5 ${
    hideStartIcon ? "pl-4" : "pl-10"
  } pr-10 shadow-sm placeholder:text-[#97A9AC] sm:text-sm sm:leading-6 text-black`;

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {!hideStartIcon && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Image
            src="/filter-svgrepo-com (1).svg"
            alt="leading"
            height={iconSize}
            width={iconSize}
            quality={100}
            priority={true}
          />
        </div>
      )}

      <input
        placeholder={placeHolder}
        className={style}
        readOnly
        value={value}
        onClick={toggleDropdown}
      />

      <div
        onClick={toggleDropdown}
        className={`absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer ${onClickStyle}`}
      >
        <Image
          src="/icon-8px-arrow-down.svg"
          alt="trailing"
          height={iconSize}
          width={iconSize}
          quality={100}
          priority={true}
        />
      </div>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-[#CCCCCC] rounded-md shadow-lg overflow-auto">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
              onClick={() => {
                setIsOpen(false);
                setValue(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
