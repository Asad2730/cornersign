import DashboardLayout from "../../dashboardLayout";
import { PaymentCard } from "../components/paymentCard";
import { SettingNavigation } from "../components/settingsNav";

export default function Payment() {
  return (
    <DashboardLayout title="Settings">
      <div className="flex flex-col space-y-2 lg:space-y-4">
        <SettingNavigation />
        <PaymentCard/>
      </div>
    </DashboardLayout>
  );
}
