import { CustomInput } from "@/app/common/components/customInput";
import DashboardLayout from "../dashboardLayout";
import Link from "next/link";
import { dashboard_navigation } from "@/app/common/navigation/main";
import { OrdersTable } from "./component/ordertable";
import { CustomDdl } from "@/app/common/components/customDdl";

export default function Orders() {
  return (
    <DashboardLayout title="orders">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
          <span className="text-[#000637] font-bold text-xl md:text-2xl">
            Orders
          </span>
          <div className="flex flex-col sm:flex-row sm:space-x-1 space-y-4 sm:space-y-0 items-start sm:items-center">
            <CustomDdl placeHolder="Status" iconSize={15} items={['Reached','Picked','Delivered','Accepted',
              'Retrieved','Completed','Signs Returned','Pending']}/>  
            <CustomInput
              placeHolder="Type here..."
              type="search"
              leadingIcon="/search.svg"
            />
            <Link
              href={dashboard_navigation.Orders.subRoutes.create}
              className="font-semibold text-sm bg-[#5E99A0] text-[#FFFFFF] border-[#CCCCCC] rounded-md px-4 py-2 text-center"
            >
              Create Order
            </Link>
          </div>
        </div>
        <OrdersTable />
      </div>
    </DashboardLayout>
  );
}
