'use client'
import { usePathname } from "next/navigation";
import { dashboard_navigation } from "@/app/common/navigation/main";
import Link from "next/link";

export const SettingNavigation = () => {
  const pathname = usePathname();

  const settingsKeys = Object.keys(
    dashboard_navigation.Settings.subRoutes
  ) as Array<keyof typeof dashboard_navigation.Settings.subRoutes>;

  return (
    <div className="flex flex-wrap justify-center lg:justify-start space-x-4 sm:space-x-6 lg:space-x-8 lg:ml-2">
      {settingsKeys.map((key, index) => {
        const href = dashboard_navigation.Settings.subRoutes[key];
        return (
          <Link
            key={index}
            href={href}
            className={`pb-2 text-sm sm:text-base  font-bold ${
              pathname === href
                ? "text-[#5E99A0] border-b-4 border-[#5E99A0]"
                : "text-[#252829]"
            }`}
          >
            {key.replace(/([a-z])([A-Z])/g, "$1 $2")}
          </Link>
        );
      })}
    </div>
  );
};
