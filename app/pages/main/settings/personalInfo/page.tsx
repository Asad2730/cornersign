import DashboardLayout from "../../dashboardLayout";
import { InfoCard } from "../components/infoCard";
import { SettingNavigation } from "../components/settingsNav";

export default function PersonalInfo() {
  return (
    <DashboardLayout title="Settings">
      <div className="flex flex-col space-y-2 lg:space-y-4">
        <SettingNavigation />
        <InfoCard />
      </div>
    </DashboardLayout>
  );
}
