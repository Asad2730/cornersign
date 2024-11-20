"use client";
import { useState } from "react";
import { CustomBtn } from "@/app/common/components/customBtn";
import { CustomInput } from "@/app/common/components/customInput";
import Image from "next/image";


export const PaymentCard = () => {
  const [selectedMethod, setSelectedMethod] = useState("stripe");

  return (
    <div className="overflow-hidden rounded-lg bg-[#FFFF] shadow  lg:h-[530px]">
      <div className="px-4 py-5 sm:px-6">
        <div className=" overflow-auto lg:h-[460px] mx-auto p-4 md:p-6 bg-[#FFFF] border border-[#00000040] rounded-2xl shadow">
          <h3 className="font-bold text-lg text-[#344767] mb-4">
            Payment Method
          </h3>
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
            <div
              className={`flex items-center justify-center  ${
                selectedMethod === "paypal" ? "border-2 border-[#0070BA]" : ""
              } rounded-lg p-2 cursor-pointer`}
              onClick={() => setSelectedMethod("paypal")}
            >
              <Image
                alt="paypal"
                src="/Group 54120.svg"
                width={100}
                height={100}
              />
            </div>

            <div
              className={`flex items-center justify-center ${
                selectedMethod === "stripe" ? "border-2 border-[#5E99A0]" : ""
              } rounded-lg p-2 cursor-pointer`}
              onClick={() => setSelectedMethod("stripe")}
            >
              <Image
                alt="Stripe"
                src="/Path 25168.svg"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="grid grid-cols-1 gap-2">
              <span className="text-[#344767] text-sm">Card No</span>
              <CustomInput type="text" placeHolder="Card Number" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 mb-4">
            <div className="grid grid-cols-1 gap-2">
              <span className="text-[#344767] text-sm">Expiry Month</span>
               <CustomInput type="date"/>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <span className="text-[#344767] text-sm">Expiry Year</span>
               <CustomInput type="date"/>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <span className="text-[#344767] text-sm">CVV</span>
              <CustomInput placeHolder="0000" />
            </div>
          </div>

          <div className="flex justify-end">
            <CustomBtn
              label="Save Changes"
              className="w-full md:w-auto bg-[#5E99A0] text-white px-6 py-2.5 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
