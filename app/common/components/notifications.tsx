import Image from "next/image"

export const Notifications = () => (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-4 z-10">
    <div className="flex flex-col  mb-4 ">
      <h2 className="text-lg font-semibold text-[#212B36] ">Notifications</h2>
      <span className="text-sm text-[#637381] ">You have 1 unread notifications</span>
    </div>

    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <Image alt="user" src="/profile.jpeg" height={40} width={40} className="w-10 h-10 rounded-full" />
        <div>
          <p className="text-[#212B36] text-sm">
            Your order has been accepted and will be delivered on time by Henry.
          </p>
          <p className="text-xs text-[#637381]">07 Sep 2020</p>
        </div>
      </div>
     
    </div>

    <div className="text-center mt-4">
      <span  className="text-[#0000EE] text-sm font-semibold">View All</span>
    </div>
  </div>
);
