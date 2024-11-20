import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { dashboard_navigation } from "@/app/common/navigation/main";

export const NavigationList = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {Object.entries(dashboard_navigation).map(([key, value]) => {
              const isActive = pathname.includes(value.href);

              return (
                <Link
                  key={key}
                  href={value.href}
                  className={`group flex gap-x-3 rounded-md p-2 text-[13px] font-semibold leading-6 font-segoe 
                    ${
                      isActive ? "bg-[#dfebec] text-[#5E99A0]" : "text-[#000637]"
                    }`}
                >
                  <Image
                    src={value.icon}
                    alt="icon"
                    height={20}
                    width={20}
                    quality={100}
                    priority={true}
                  />
                  {key}
                </Link>
              );
            })}
          </ul>
        </li>
      </ul>
    </nav>
  );
};
