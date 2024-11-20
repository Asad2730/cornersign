import DashboardLayout from "../dashboardLayout";
import { CustomChart } from "./component/chart";
import { LatestOrder } from "./component/latestOrders";
import { Orders } from "./component/orders";
import { WelcomeCard } from "./component/welcome";

export default function Home() {
  return (
    <DashboardLayout title="Home">
      <div className="flex flex-col  ">
        <WelcomeCard />
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          <section className="flex flex-col w-full lg:w-[70%] ">
            <Orders />
            <CustomChart />
          </section>
          <section className="w-full lg:w-[30%]">
            <LatestOrder />
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
