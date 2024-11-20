"use client";
import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { onClickStyle } from "@/app/common/style/styles";
import { CustomInput } from "@/app/common/components/customInput";
import { CustomBtn } from "@/app/common/components/customBtn";
import { TransferpaymentModal } from "./transferPaymentModal";

interface IpaymentModal {
  open: boolean;
  onClose: () => void;
}

const iconSize = 20;

export const PaymentModal = ({ open, onClose }: IpaymentModal)=> {
  const [isPaypal, setIsPaypal] = useState(true);
  const onChangePaypal = () => setIsPaypal(!isPaypal);
 
  const [openTransfer,setOpenTransfer] = useState(false);

  const onOpen = () => {
     onClose(); 
    setOpenTransfer(true);

  }
 const  onCloseTransfer = () => setOpenTransfer(false);

  return (
   <>
      <Dialog
      open={open}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75" aria-hidden="true"></div>
      <DialogPanel
        className="bg-[#FFFF] rounded-2xl shadow-xl w-full max-w-sm md:max-w-md  p-4 mx-2 sm:p-6 sm:mx-4 relative"
      >
        <div
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <Image
            alt="x"
            src="/close-svgrepo-com.svg"
            quality={100}
            height={13}
            width={13}
          />
        </div>

        <div className="flex flex-col mb-3">
          <div className="mx-auto flex items-center justify-center ">
            <Image
              alt="logo"
              src="/Group 54093.svg"
              quality={100}
              height={200}
              width={200}
            />
          </div>
          <span className="text-[#000000] font-bold text-lg mb-4">Payment Method</span>
          <div className="grid grid-cols-1 gap-2 mb-3">
            <div
              onClick={onChangePaypal}
              className={`flex flex-row items-center space-x-2 p-2 border border-[#1A1717] rounded-md cursor-pointer ${onClickStyle}`}
            >
              <Image
                alt="icon"
                src={`${isPaypal ? "/Group 54117.svg" : "/Path 25178.svg"}`}
                quality={100}
                height={iconSize}
                width={iconSize}
              />
              <span className="text-[#6772E5] font-bold text-md">stripe</span>
            </div>

            <div
              onClick={onChangePaypal}
              className={`flex flex-row items-center space-x-2 p-2 border border-[#1A1717] rounded-md cursor-pointer ${onClickStyle}`}
            >
              <Image
                alt="icon"
                src={`${!isPaypal ? "/Group 54117.svg" : "/Path 25178.svg"}`}
                quality={100}
                height={iconSize}
                width={iconSize}
              />
              <span className="text-[#003087] font-bold text-md">
                Pay
                <span className="text-[#009CDE]">Pal</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col border border-[#1A1717] rounded-md p-4 mb-3">
            <div className="grid grid-cols-1 gap-3">
              <div className="grid grid-cols-1 gap-2">
                <span className="text-[#2F2E2E] font-semibold text-sm">Card number</span>
                <CustomInput placeHolder="Card number" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="grid grid-cols-1 gap-2">
                  <span className="text-[#2F2E2E] font-semibold text-sm">Expiry Month</span>
                  <CustomInput placeHolder="MM" />
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <span className="text-[#2F2E2E] font-semibold text-sm">Expiry Year</span>
                  <CustomInput placeHolder="YY" />
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <span className="text-[#2F2E2E] font-semibold text-sm">CVV</span>
                  <CustomInput placeHolder="CVV" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-3">
            <CustomBtn onClick={onOpen} label="Pay" className="w-full sm:w-auto lg:w-1/4 bg-[#5E99A0] rounded-lg p-2" />
          </div>
        </div>
      </DialogPanel>
    </Dialog>

    <TransferpaymentModal open={openTransfer} onClose={onCloseTransfer} />
   </>
  );
}
