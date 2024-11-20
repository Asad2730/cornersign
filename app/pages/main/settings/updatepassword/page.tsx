import DashboardLayout from "../../dashboardLayout";
import { SettingNavigation } from "../components/settingsNav";
import { UpdateCard } from "../components/updateCard";

export default function UpdatePassword() {
  return (
    <DashboardLayout title="Settings">
      <div className="flex flex-col space-y-2 lg:space-y-4">
        <SettingNavigation />
        <UpdateCard/>
      </div>
    </DashboardLayout>
  );
}
