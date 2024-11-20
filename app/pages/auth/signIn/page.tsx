'use client'
import { CustomBtn } from "@/app/common/components/customBtn";
import { CustomInput } from "@/app/common/components/customInput";
import AuthLayout from "../authLayout";
import { FormHeader } from "../component/formHeader";
import Link from "next/link";
import { authNav } from "@/app/common/navigation/auth";
import { useRouter } from "next/navigation";
import { dashboard_navigation } from "@/app/common/navigation/main";
import { useCallback } from "react";
import { CustomPasswordInput } from "@/app/common/components/customPasswordInput";


export default function SignIn() {
  const router = useRouter();
  const login =  useCallback(()=>{router.push(dashboard_navigation.Home.href)},[router])
  return (
    <AuthLayout>
      <div className="flex flex-col space-y-2 md:w-1/2">
        <FormHeader
          title="Sign In"
          subTitle="Already have an account?"
          linkTitle="Sign up"
          linkPath={authNav.signup.path}
        />
        <div className="grid grid-cols-1 gap-2">
          <CustomInput placeHolder="First Name" />
          <CustomPasswordInput placeHolder="password"/>
        </div>

        <div className="space-y-4">
          <div className="flex justify-end">
            <Link href={authNav.forgotPassword.path} className="text-[#0000EE] cursor-pointer text-xs font-bold underline">
              Forgot Password?
            </Link>
          </div>

          <CustomBtn label="Sign in" onClick={login} />
        </div>
      </div>
    </AuthLayout>
  );
}
