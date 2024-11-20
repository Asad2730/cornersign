'use client'
import { underline } from "@/app/common/style/styles";
import DashboardLayout from "../../dashboardLayout";
import { CustomInput } from "@/app/common/components/customInput";
import Image from "next/image";
import { CustomBtn } from "@/app/common/components/customBtn";
import { SectionHeading, InputField } from "../component/helpers";
import { Suspense, useMemo } from "react";
import { useRouter } from "next/navigation";
import { dashboard_navigation } from "@/app/common/navigation/main";
import { useSearchParams } from 'next/navigation';

  function Upsert() { 
  const router = useRouter();
  const searchParams = useSearchParams();
  const title = searchParams.get('edit') ? 'Edit' : 'Create';

  const signs = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => `Sign ${i + 1}`);
  }, []);
  
 
  return (
    <>
      <DashboardLayout title={`${title} Order`} optionalTitle="Orders">
      <div className="flex flex-col space-y-4">
        <span className="font-bold text-[#000637] text-xl sm:text-2xl">
          {title} Order
        </span>
        <section className="overflow-hidden rounded-2xl bg-[#FFFFFF] shadow">
          <div className="px-4 py-5 sm:p-6 space-y-4">
            <SectionHeading>Order Detail</SectionHeading>
            {underline}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Order ID" placeHolder="ID 001" readOnly />
              <InputField
                label="Open House Address"
                placeHolder="Open House Address"
                trailingIcon="/location-pin-svgrepo-com.svg"
                iconSize={15}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Pickup Address"
                placeHolder="Pickup Address"
                trailingIcon="/location-pin-svgrepo-com.svg"
                iconSize={15}
              />
              <InputField
                label="Delivery Address"
                placeHolder="Delivery Address"
                trailingIcon="/location-pin-svgrepo-com.svg"
                iconSize={15}
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 gap-1">
                <span className="text-[#050505] font-semibold text-sm">
                  No of Signs
                </span>
                <div className="grid grid-cols-[70%_30%] md:grid-cols-[80%_20%] gap-4 items-center">
                  <CustomInput placeHolder="6" />
                  <span className="text-[#050505] font-semibold">$50</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
              {signs.map((sign, index) => (
                <InputField
                  key={index}
                  label={sign}
                  placeHolder="Location"
                  trailingIcon="/location-pin-svgrepo-com.svg"
                  iconSize={15}
                />
              ))}
            </div>

            <SectionHeading>Open House Time Details</SectionHeading>
            {underline}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Date"
                placeHolder="10/29/2024"
                trailingIcon="/calendar-svgrepo-com.svg"
                iconSize={15}
              />
              <InputField
                label="Time"
                placeHolder="3:34"
                trailingIcon="/calendar-svgrepo-com-1.svg"
                iconSize={15}
              />
            </div>

            <SectionHeading>Sign Retrieval Time Details</SectionHeading>
            {underline}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Date"
                placeHolder="10/29/2024"
                trailingIcon="/calendar-svgrepo-com.svg"
                iconSize={15}
              />
              <InputField
                label="Time"
                placeHolder="3:34"
                trailingIcon="/calendar-svgrepo-com-1.svg"
                iconSize={15}
              />
            </div>

            <SectionHeading>Attachments</SectionHeading>
            {underline}

            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-[#F8FBFF]">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Image
                  alt="upload"
                  src="/upload.svg"
                  quality={100}
                  height={50}
                  width={50}
                />
                <p className="mb-2 text-sm text-[#000637]">
                  <span className="font-semibold">Upload Files</span>
                </p>
              </div>
              <input type="file" className="hidden" />
            </label>

            <SectionHeading>Instructions</SectionHeading>
            {underline}

            <textarea
              className="pl-3 pt-3 block w-full rounded-md border border-[#CCCCCC] shadow-sm placeholder:text-[#97A9AC] sm:text-sm sm:leading-6 text-black"
              cols={6}
              rows={5}
              placeholder="Enter text here..."
            />

            <div className="flex justify-end w-full mt-4">
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
                <CustomBtn label="Review Details" onClick={()=>router.push(dashboard_navigation.Orders.subRoutes.detail)}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
    
    </>
  );
}


const UpsertPageWrapper = () => (
  <Suspense fallback={<div>Loading...</div>} >
    <Upsert/>
  </Suspense>
)


export default UpsertPageWrapper;