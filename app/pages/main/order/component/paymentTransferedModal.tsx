import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";

interface ISuccessPayment {
  open: boolean;
  onClose: () => void;
}

export const SuccessPaymentModal = ({ open, onClose }: ISuccessPayment) => {
  return (
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

        <div className="flex flex-col space-y-6 mb-3">
          <div className="mx-auto flex items-center justify-center mb-4">
            <Image
              alt="logo"
              src="/Group 53093.svg"
              quality={100}
              height={200}
              width={200}
              className="sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
            />
          </div>
          <div className="space-y-3">
            <div className="flex flex-col items-center">
              <span className="text-[#34A853] font-bold text-xl ">
                 Payment Transfered
              </span>
              <span className="text-[#000637]  text-lg ">
                Amount has been transfered to the
              </span>
              <span className="text-[#000637] font-bold text-lg ">
              driver&#39;s account successfully
              </span>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};
