"use client";
import { ConfirmDeleteModal } from "@/app/common/components/confirmDeleteModal";
import { CustomBtn } from "@/app/common/components/customBtn";
import { dashboard_navigation } from "@/app/common/navigation/main";
import { onClickStyle } from "@/app/common/style/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const sampleOrders = [
  {
    id: "ID-001",
    signs: 3,
    pickupAddress: "13th St, New York",
    returnAddress: "20 th St, New York",
    date: "07/26/2024",
    time: "05:00 PM",
    driverName: "Johnny Barrett",
    driver_pic: "/Oval@2x.png",
    compensation: "$10",
    status: "REACHED",
  },
  {
    id: "ID-002",
    signs: 10,
    pickupAddress: "13th St, New York",
    returnAddress: "20 th St, New York",
    date: "07/26/2024",
    time: "05:00 PM",
    driverName: "Harry Coleman",
    driver_pic: "/Oval@2x.png",
    compensation: "$30",
    status: "PICKED",
  },
  {
    id: "ID-003",
    signs: 3,
    pickupAddress: "13th St, New York",
    returnAddress: "20 th St, New York",
    date: "07/26/2024",
    time: "05:00 PM",
    driverName: "Craig Pearson",
    driver_pic: "/Oval@2x.png",
    compensation: "$10",
    status: "DELIVERED",
  },
  {
    id: "ID-004",
    signs: 3,
    pickupAddress: "13th St, New York",
    returnAddress: "20 th St, New York",
    date: "07/26/2024",
    time: "05:00 PM",
    driverName: "Alex Smith",
    driver_pic: "/Oval@2x.png",
    compensation: "$10",
    status: "ACCEPTED",
  },
  {
    id: "ID-005",
    signs: 3,
    pickupAddress: "13th St, New York",
    returnAddress: "20 th St, New York",
    date: "07/26/2024",
    time: "05:00 PM",
    driverName: "Alan Fuller",
    driver_pic: "/Oval@2x.png",
    compensation: "$10",
    status: "RETRIEVED",
  },
  {
    id: "ID-006",
    signs: 3,
    pickupAddress: "13th St, New York",
    returnAddress: "20 th St, New York",
    date: "07/26/2024",
    time: "05:00 PM",
    driverName: "Chris Carrol",
    driver_pic: "/Oval@2x.png",
    compensation: "$10",
    status: "COMPLETED",
  },
  {
    id: "ID-007",
    signs: 3,
    pickupAddress: "13th St, New York",
    returnAddress: "20 th St, New York",
    date: "07/26/2024",
    time: "05:00 PM",
    driverName: "Craig Fisher",
    driver_pic: "/Oval@2x.png",
    compensation: "$10",
    status: "SIGNS RETURNED",
  },
  {
    id: "ID-008",
    signs: 3,
    pickupAddress: "13th St, New York",
    returnAddress: "20 th St, New York",
    date: "07/26/2024",
    time: "05:00 PM",
    driverName: "Joe Carrol",
    driver_pic: "/Oval@2x.png",
    compensation: "$10",
    status: "PICKED",
  },
  {
    id: "ID-009",
    signs: 3,
    pickupAddress: "13th St, New York",
    returnAddress: "20 th St, New York",
    date: "07/26/2024",
    time: "05:00 PM",
    driverName: "George Pierce",
    driver_pic: "/Oval@2x.png",
    compensation: "$10",
    status: "PENDING",
  },
];

export const OrdersTable = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [orders] = useState(sampleOrders);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => setActiveTab(tabIndex);
  const viewOrder = () =>
    router.push(dashboard_navigation.Orders.subRoutes.detail);

  const ordersLenth: number =
    sampleOrders.length === 0 ? 0 : sampleOrders.length + 1;

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <div className="overflow-hidden rounded-2xl bg-[#FFFFFF] shadow">
        <div className="px-4 py-5 sm:px-6 md:px-8 lg:px-10">
          <div className="flex flex-col sm:flex-row">
            <span
              onClick={() => handleTabClick(1)}
              className={`py-2 px-4 font-semibold text-center sm:text-left cursor-pointer border-b-2 ${
                activeTab === 1
                  ? "text-[#5E99A0] border-[#5E99A0]"
                  : "text-[#252829] border-transparent"
              }`}
            >
              All Orders ({ordersLenth})
            </span>
            <span
              onClick={() => handleTabClick(2)}
              className={`py-2 px-4 font-semibold text-center sm:text-left cursor-pointer border-b-2 ${
                activeTab === 2
                  ? "text-[#5E99A0] border-[#5E99A0]"
                  : "text-[#252829] border-transparent"
              }`}
            >
              Placement Orders ({ordersLenth})
            </span>
            <span
              onClick={() => handleTabClick(3)}
              className={`py-2 px-4 font-semibold text-center sm:text-left cursor-pointer border-b-2 ${
                activeTab === 3
                  ? "text-[#5E99A0] border-[#5E99A0]"
                  : "text-[#252829] border-transparent"
              }`}
            >
              Retrieved Orders ({ordersLenth})
            </span>
          </div>

          <div className="w-full overflow-x-auto mt-4">
            {orders.length > 0 ? (
              <table className="w-full min-w-[640px]">
                <thead className="bg-[#EEF5F5]">
                  <tr className="text-left text-[#000637] text-xs sm:text-sm leading-normal whitespace-nowrap">
                    <th className="py-3 px-2 sm:px-4">ID</th>
                    <th className="py-3 px-2 sm:px-4">No of Signs</th>
                    <th className="py-3 px-2 sm:px-4">Pickup Address</th>
                    <th className="py-3 px-2 sm:px-4">Return Address</th>
                    <th className="py-3 px-2 sm:px-4">Date</th>
                    <th className="py-3 px-2 sm:px-4">Time</th>
                    <th className="py-3 px-2 sm:px-4">Driver Name</th>
                    <th className="py-3 px-2 sm:px-4 text-center">
                      Compensation
                    </th>
                    <th className="py-3 px-2 sm:px-4">Status</th>
                    <th className="py-3 px-2 sm:px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#EEF5F5] text-[#000637] whitespace-nowrap"
                    >
                      <td className="py-3 px-2 sm:px-4">{order.id}</td>
                      <td className="py-3 px-2 sm:px-4">{order.signs}</td>
                      <td className="py-3 px-2 sm:px-4">
                        {order.pickupAddress}
                      </td>
                      <td className="py-3 px-2 sm:px-4">
                        {order.returnAddress}
                      </td>
                      <td className="py-3 px-2 sm:px-4">{order.date}</td>
                      <td className="py-3 px-2 sm:px-4">{order.time}</td>
                      <td className="py-3 px-2 sm:px-4">
                        <div className="flex items-center">
                          <Image
                            alt="pic"
                            src={order.driver_pic}
                            height={30}
                            width={30}
                            quality={100}
                            className="rounded-full"
                          />
                          <span className="ml-3">{order.driverName}</span>
                        </div>
                      </td>
                      <td className="py-3 px-2 sm:px-4 text-center">
                        {order.compensation}
                      </td>
                      <td className="py-3 px-2 sm:px-4">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                            order.status === "REACHED"
                              ? "bg-blue-100 text-blue-800"
                              : order.status === "PICKED"
                              ? "bg-yellow-100 text-yellow-800"
                              : order.status === "DELIVERED"
                              ? "bg-purple-100 text-purple-800"
                              : order.status === "ACCEPTED"
                              ? "bg-green-100 text-green-800"
                              : order.status === "RETRIEVED"
                              ? "bg-gray-100 text-gray-800"
                              : order.status === "COMPLETED"
                              ? "bg-green-200 text-green-900"
                              : order.status === "SIGNS RETURNED"
                              ? "bg-red-200 text-red-900"
                              : order.status === "PENDING"
                              ? "bg-yellow-200 text-yellow-900"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-2 sm:px-4 flex space-x-1">
                        {activeTab === 1 && (
                          <Image
                            onClick={onOpen}
                            alt="delete"
                            src="/delete-svgrepo-com.svg"
                            quality={100}
                            height={20}
                            width={20}
                            className={`${onClickStyle}`}
                          />
                        )}
                        <Image
                          onClick={viewOrder}
                          alt="eye"
                          src="/eye-tb.svg"
                          quality={100}
                          height={20}
                          width={20}
                          className={`${onClickStyle}`}
                        />
                        <Image
                          alt="edit"
                          src="/edit-tb.svg"
                          quality={100}
                          height={20}
                          width={20}
                          className={`${onClickStyle}`}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col items-center justify-center h-60 sm:h-80 md:h-96">
                <Image
                  alt="no jobs"
                  src="/Group 35287.svg"
                  height={100}
                  width={100}
                  quality={100}
                />
                <p className="text-[#212B36] font-semibold mt-4 text-center">
                  There are no Jobs yet
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-4">
            <nav className="inline-flex space-x-2">
              <CustomBtn
                label="1"
                className="px-2 py-1 rounded-full bg-[#5E99A0] text-[#FFFFFF] border-[#CCCCCC] text-xs sm:text-sm hover:bg-[#4D8A91]"
              />
              <CustomBtn
                label="2"
                className="px-2 py-1 rounded-full bg-[#5E99A0] text-[#FFFFFF] border-[#CCCCCC] text-xs sm:text-sm hover:bg-[#4D8A91]"
              />
              <CustomBtn
                label="3"
                className="px-2 py-1 rounded-full bg-[#5E99A0] text-[#FFFFFF] border-[#CCCCCC] text-xs sm:text-sm hover:bg-[#4D8A91]"
              />
              <CustomBtn
                label="4"
                className="px-2 py-1 rounded-full bg-[#5E99A0] text-[#FFFFFF] border-[#CCCCCC] text-xs sm:text-sm hover:bg-[#4D8A91]"
              />
            </nav>
          </div>
        </div>
      </div>

      <ConfirmDeleteModal open={open} onClose={onClose}/>
    </>
  );
};
