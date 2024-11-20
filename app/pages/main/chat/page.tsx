import DashboardLayout from "../dashboardLayout";
import { Chats } from "./components/chats";

export default function Chat() {
  return (
    <DashboardLayout title="Chat">
      <div className="flex flex-col space-y-2 lg:space-y-4 h-full">
        <span className="text-[#1A1717] font-bold text-2xl">Chat</span>
        <div className="flex-1 h-full">
          <Chats />
        </div>
      </div>
    </DashboardLayout>
  );
}
