'use client'
import { useRouter } from "next/navigation";
import CustomForm from "../component/customForm";
import { useCallback } from "react";
import { authNav } from "@/app/common/navigation/auth";


export default function Continue() {
 
  const router = useRouter()
  const complete = useCallback(()=>{router.push(authNav.login.path)},[router])
  return (
    <CustomForm
      url="/continueLogo.svg"
      title="Password Reset"
      subTitle="Your password has been successfully reset."
      btnTitle="Continue"
      btnClick={complete}
    />
  );
}
