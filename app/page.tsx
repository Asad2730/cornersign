'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authNav } from "./common/navigation/auth";


export default function Home() {
  
  const  router = useRouter()
  useEffect(()=>{
     router.push(authNav.login.path)
  },[router])
  return (
    <>
    </>
  );
}
