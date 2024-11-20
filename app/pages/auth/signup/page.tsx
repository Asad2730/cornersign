"use client";
import { CustomBtn } from "@/app/common/components/customBtn";
import { CustomInput } from "@/app/common/components/customInput";
import { FileUpload } from "@/app/common/components/fileUpload";
import AuthLayout from "../authLayout";
import { FormHeader } from "../component/formHeader";
import { authNav } from "@/app/common/navigation/auth";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CustomPasswordInput } from "@/app/common/components/customPasswordInput";

export default function SignUp() {
  const router = useRouter();
  const create = useCallback(() => {
    router.push(authNav.login.path);
  }, [router]);
  return (
    <AuthLayout>
      <div className="flex flex-col space-y-4 lg:p-20 w-full">
        <FormHeader
          title="Sign Up"
          subTitle="Are you an existing Agent?"
          linkTitle="  Sign In."
          linkPath={authNav.login.path}
        />

        <div className="grid grid-cols-2 gap-2">
          <CustomInput placeHolder="First Name" />
          <CustomInput placeHolder="Last Name" />
        </div>

        <div className="grid grid-cols-2 gap-2 mt-2">
          <CustomInput placeHolder="Email" type="email" />
          <CustomInput placeHolder="Phone Number" />
        </div>

        <div className="grid grid-cols-1 gap-2 mt-2">
          <FileUpload placeHolder="Upload Image" />
        </div>

        <div className="grid grid-cols-2 gap-2 mt-2">
          <CustomPasswordInput placeHolder="Password"/>
          <CustomPasswordInput placeHolder="Confirm Password"/>
        </div>

        <div className="flex flex-col  justify-center w-1/2 mx-auto mt-4 space-y-2">
          <CustomBtn label="Sign up" onClick={create} />
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-[#C0C9CB]"></div>
            <span className="text-[#9399A3] text-xs px-3">or sign up with</span>
            <div className="flex-grow border-t border-[#C0C9CB]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <CustomBtn label="Facebook" iconSrc="/facebook_5968764.svg" />
            <CustomBtn label="Apple" iconSrc="/Apple.svg" />
            <CustomBtn label="Google" iconSrc="/google_13170545.svg" />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
