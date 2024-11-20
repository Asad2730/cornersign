import { CustomBtn } from "@/app/common/components/customBtn";
import Image from "next/image";
import AuthLayout from "../authLayout";
import Link from "next/link";
import React from "react";
import { authNav } from "@/app/common/navigation/auth";

interface ICustomForm {
  url: string;
  title: string;
  subTitle: string;
  inputs?: React.JSX.Element[];
  btnTitle: string;
  btnClick?: () => void;
  imgSize?: number;
}

export default function CustomForm({
  url,
  title,
  subTitle,
  inputs,
  btnTitle,
  btnClick,
  imgSize = 80,
}: ICustomForm) {
  return (
    <AuthLayout>
      <div className="flex flex-col space-y-4  md:w-1/2">
        <div className="flex flex-col justify-center items-center ">
          <Image
            src={url}
            alt="logo"
            height={imgSize}
            width={imgSize}
            priority={true}
            quality={100}
            className="mb-4"
          />
          <span className="text-center text-[#000637] font-bold text-xl">
            {title}
          </span>
          <span className="text-[#9399A3] text-xs text-center">{subTitle}</span>
        </div>

        <div className="grid grid-cols-1 gap-2">
          {inputs?.map((input, index) => (
            <div key={index}>{input}</div>
          ))}
        </div>

        <div className="flex flex-col space-y-4">
          <CustomBtn label={btnTitle} onClick={btnClick} />
          <Link
            href={authNav.login.path}
            className={`flex flex-row space-x-2 justify-center`}
          >
            <Image
              src="/Group 45115.svg"
              alt="back"
              height={20}
              width={20}
              quality={100}
            />
            <span className="text-[#EA4335]   text-sm ">Back to Login</span>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
