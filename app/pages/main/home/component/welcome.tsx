import { dashboard_navigation } from "@/app/common/navigation/main";
import Image from "next/image";
import Link from "next/link";

export const WelcomeCard = () => (
  <section className="overflow-hidden rounded-2xl bg-[url('/Bgg@2x.png')] bg-cover bg-no-repeat mb-2 lg:h-[115px]">
    <div className="px-4 py-5 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-row items-center space-x-2">
          <span className="text-white md:text-xl text-lg lg:pb-8">
            Welcome to
          </span>
          <Image
            src={"/Group 52935.svg"}
            alt="welcome"
            height={100}
            width={100}
            quality={100}
          />
        </div>

        <div className="flex items-center">
          <Link
            href={dashboard_navigation.Orders.subRoutes.create}
            className="bg-[#5E99A0] text-white px-4 py-2  sm:px-6  rounded-md text-sm sm:text-base md:text-lg"
          >
            CREATE ORDER
          </Link>
        </div>
      </div>
    </div>
  </section>
);
