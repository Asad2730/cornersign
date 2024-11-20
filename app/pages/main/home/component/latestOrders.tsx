import { underline } from "@/app/common/style/styles";
import { OrderCard } from "./orderCard";


export const LatestOrder = () => (
  <div className="overflow-auto rounded-2xl bg-[#FFFFFF] shadow lg:h-[460px] ">
    <div className="px-4 py-5 sm:px-6 space-y-4 ">
      <span className="text-[#131523] font-bold">Last 5 Orders</span>
       {underline}
      <OrderCard  />
    </div>
  </div>
);
