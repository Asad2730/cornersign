"use client";
import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { CustomBtn } from "@/app/common/components/customBtn";
import { SuccessPaymentModal } from "./paymentTransferedModal";

interface ITransferpayment {
  open: boolean;
  onClose: () => void;
}

export const TransferpaymentModal = ({ open, onClose }: ITransferpayment) => {
  const [openSuccess, setopenSuccess] = useState(false);

  const onOpen = () => {
    onClose();
    setopenSuccess(true);
  };
  const onCloseSuccess = () => setopenSuccess(false);

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75"
          aria-hidden="true"
        ></div>
        <DialogPanel className="bg-[#FFFF] rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md  p-4 sm:p-6 mx-2 relative">
          <div
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <Image
              alt="x"
              src="/close-svgrepo-com.svg"
              quality={100}
              height={16}
              width={16}
            />
          </div>

          <div className="flex flex-col  mb-3">
            <div className="mx-auto flex items-center justify-center ">
              <Image
                alt="logo"
                src="/Group 54093.svg"
                quality={100}
                height={150}
                width={150}
                className="sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
              />
            </div>
            <span className="text-[#000000] font-bold text-lg sm:text-xl mb-6">
              Transfer Payment
            </span>
            <div className="space-y-3">
              <div
                className="flex flex-col justify-center items-center text-[#000000] border border-[#1A1717] rounded-md p-3 sm:p-4"
                style={{ backgroundColor: "rgba(146, 186, 191, 0.75)" }}
              >
                <span className="font-bold text-4xl sm:text-5xl">$10</span>
                <span className="font-semibold text-sm sm:text-base">
                  Payment
                </span>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <CustomBtn
                onClick={onOpen}
                label="Transfer Payment"
                className="w-full sm:w-auto lg:w-[88%] bg-[#5E99A0] rounded-lg p-2 sm:px-4 sm:py-2"
              />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <SuccessPaymentModal open={openSuccess} onClose={onCloseSuccess} />
    </>
  );
};
