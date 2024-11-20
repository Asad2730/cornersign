'use client'
import { useCallback, useMemo } from "react";
import CustomForm from "../component/customForm";
import { useRouter } from "next/navigation";
import { authNav } from "@/app/common/navigation/auth";
import { CustomPasswordInput } from "@/app/common/components/customPasswordInput";

export default function ChangePassword() {
  const router = useRouter();
  const inputs = useMemo(() => {
    return [
      <CustomPasswordInput
        placeHolder="Password"
        key={1}
      />,
      <CustomPasswordInput
        placeHolder="Confirm Password"
        key={2}
       
      />,
    ];
  }, []);

  const update = useCallback(() => {
      router.push(authNav.continue.path);
    }, [router]);

  return (
    <CustomForm
      url="/Requestsendsuccessfully!.svg"
      imgSize={150}
      title="Request send successfully!"
      subTitle="Reset your password."
      btnTitle="Update Password"
      btnClick={update}
      inputs={inputs}
    />
  );
}
