"use client";
import { CustomBtn } from "@/app/common/components/customBtn";
import { CustomPasswordInput } from "@/app/common/components/customPasswordInput";

export const UpdateCard = () => {
  return (
    <div className="overflow-hidden rounded-lg bg-[#FFFF] shadow lg:h-[525px]">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex flex-col border border-[#00000040] space-y-4 p-4 sm:p-6 rounded-2xl">
          <span className="text-[#344767] font-bold text-lg">
            Change Password
          </span>
          <div className="grid grid-cols-1 gap-4">
            <CustomPasswordInput
              placeHolder="Current Password"
            />

            <CustomPasswordInput
              placeHolder="New Password"
            />

            <CustomPasswordInput
              placeHolder="Confirm New Password"
            />
          </div>

          <span className="text-[#344767] font-bold text-lg">
            Password requirements
          </span>
          <span className="text-[#7B809A] text-sm">
            Please follow these guidelines for a strong password.
          </span>
          <div className="grid grid-cols-1 gap-1">
            <span className="text-[#7B809A] text-sm">
              One Special Character
            </span>
            <span className="text-[#7B809A] text-sm">
              One Number (2 are recommended)
            </span>
            <span className="text-[#7B809A] text-sm">Change it often</span>
          </div>

          <div className="flex justify-end mt-4">
            <CustomBtn
              label="Save Changes"
              className="w-full sm:w-auto sm:px-6 bg-[#5E99A0] text-[#FFFFFF] border-[#CCCCCC] gap-x-2  
                rounded-lg border py-2.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
