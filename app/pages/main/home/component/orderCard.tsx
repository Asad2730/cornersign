import { CustomBtn } from "@/app/common/components/customBtn";
import Image from "next/image";
import { useMemo, useCallback } from "react";

const latest = [
  {
    id: 1,
    status: "Completed",
    price: "$50",
    date: "09/08/2024, 02:00 PM",
    address: "132, Street, Kingston ____ 123, Main St.",
  },
  {
    id: 2,
    status: "Reached",
    price: "$50",
    date: "09/08/2024, 02:00 PM",
    address: "132, Street, Kingston ____ 123, Main St.",
  },
  {
    id: 3,
    status: "Picked",
    price: "$50",
    date: "09/08/2024, 02:00 PM",
    address: "132, Street, Kingston ____ 123, Main St.",
  },
  {
    id: 4,
    status: "Accepted",
    price: "$50",
    date: "09/08/2024, 02:00 PM",
    address: "132, Street, Kingston ____ 123, Main St.",
  },
  {
    id: 5,
    status: "Delivered",
    price: "$50",
    date: "09/08/2024, 02:00 PM",
    address: "132, Street, Kingston ____ 123, Main St.",
  },
];

type Status = "Completed" | "Accepted" | "Reached" | "Picked" | "Delivered";

export const OrderCard = () => {
  const getStatusStyles = useCallback((status: Status): string => {
    const statusStyles = {
      Completed: "bg-[#EFF8ED] text-[#3D9727]",
      Accepted: "bg-[#EFF8ED] text-[#3D9727]",
      Reached: "bg-[#ECF5FF] text-[#2B81E3]",
      Picked: "bg-[#F7F5E1] text-[#DFAE0E]",
      Delivered: "bg-purple-50 text-[#8678AD]",
    };

    return statusStyles[status];
  }, []);

  const orderList = useMemo(() => {
    return latest.map((order) => (
      <div
        key={order.id}
        className="overflow-hidden rounded-2xl bg-white shadow border p-4 flex flex-col justify-between md:h-[6.1rem] space-y-2">
        <div className="flex justify-between items-center">
          <span className="flex items-center text-sm font-semibold text-[#707070]">
            <Image
              alt="sign"
              src="/sign-road-2-svgrepo-com.svg"
              quality={100}
              height={15}
              width={15}
              className="mr-1"
            />
            05
          </span>
          <div className="flex flex-row items-center space-x-2">
            <CustomBtn
              label={order.status}
              className={`${getStatusStyles(
                order.status as Status
              )} p-1 rounded-md text-xs font-semibold`}
            />
            <span className="text-[#4DB1BC] font-bold text-xl">
              {order.price}
            </span>
          </div>
        </div>
        <div className="text-xs text-[#7E84A3]">
          <p>{order.date}</p>
          <p>{order.address}</p>
        </div>
      </div>
    ));
  }, [getStatusStyles]);

  return <>{orderList}</>;
};
