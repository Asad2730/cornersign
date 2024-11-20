"use client";
import { useState } from "react";
import { onClickStyle } from "@/app/common/style/styles";
import Image from "next/image";
import { CustomBtn } from "@/app/common/components/customBtn";
import { EditInfoItem, InfoItem } from "./infoItems";

export const InfoCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => setIsEditing(!isEditing);

  return (
    <div className={`overflow-hidden rounded-lg bg-[#FFFF] shadow ${!isEditing?'lg:h-[530px]':''}`}>
      <div className="px-4 py-5 sm:px-6 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between border p-4 rounded-xl">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0">
            <div className={`${onClickStyle} relative`}>
              <Image
                alt="p"
                src="/profile.jpeg"
                quality={100}
                height={60}
                width={60}
                className="rounded-full"
              />

              <Image
                alt="c"
                src="/Group 54119.svg"
                quality={100}
                height={40}
                width={40}
                className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 rounded-full"
              />
            </div>

            <div className="text-center sm:text-left text-[#000637]">
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-sm">Admin</p>
            </div>
          </div>
        </div>

        <div className="border p-4 rounded-xl mt-2 lg:mt-6 ">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Basic Info</h3>
            {!isEditing ? (
              <Image
                alt="edit"
                src="/edit.svg"
                quality={100}
                height={20}
                width={20}
                className={`${onClickStyle} cursor-pointer`}
                onClick={handleEditClick}
              />
            ) : null}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 text-sm gap-4 ">
            {isEditing ? (
              <>
                <EditInfoItem label="First Name" value="Jhon" />
                <EditInfoItem label="Last Name" value="Doe" />
                <EditInfoItem label="Email" value="Jhon@gmail.com" />
                <EditInfoItem label="Phone no" value="123456789" />
                <EditInfoItem label="Gender" value="Male" />
              </>
            ) : (
              <>
                <InfoItem label="First Name" value="Jhon" />
                <InfoItem label="Last Name" value="Doe" />
                <InfoItem label="Email" value="Jhon@gmail.com" />
                <InfoItem label="Phone no" value="123456789" />
                <InfoItem label="Gender" value="Male" />
              </>
            )}
          </div>

          {isEditing ? (
            <div className="flex justify-end mt-4">
              <CustomBtn
                label="Save Changes"
                className="w-1/6 bg-[#5E99A0] text-[#FFFFFF] border-[#CCCCCC] gap-x-2  
                rounded-lg border  py-2.5"
                onClick={handleEditClick}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
