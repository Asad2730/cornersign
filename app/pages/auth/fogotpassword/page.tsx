"use client";
import { CustomInput } from "@/app/common/components/customInput";
import CustomForm from "../component/customForm";
import { useRouter } from "next/navigation";
import { authNav } from "@/app/common/navigation/auth";
import { useCallback } from "react";

export default function ForgotPassword() {
  const router = useRouter();

  const reset = useCallback(() => {
    router.push(authNav.changePassword.path);
  }, [router]);
  return (
    <CustomForm
      url="/forgotPassword.svg"
      title="Forgot your password?"
      subTitle="Please enter your email address.You will recieve a link to create
             a password via email"
      btnTitle="Send a reset link"
      btnClick={reset}
      inputs={[<CustomInput placeHolder="Email" type="email" key={1} />]}
    />
  );
}
