"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import { NavigationList } from "../../common/components/navList";
import Link from "next/link";
import { authNav } from "@/app/common/navigation/auth";
import { onClickStyle } from "@/app/common/style/styles";
import { Notifications } from "@/app/common/components/notifications";

interface IDashBoard {
  title: string;
  optionalTitle?: string;
  children?: React.JSX.Element[] | React.JSX.Element;
}

export default function DashboardLayout({
  title,
  children,
  optionalTitle,
}: IDashBoard) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <div className="bg-[#F6F8F8] min-h-screen">
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop className="fixed inset-0 bg-gray-900/80" />
          <div className="fixed inset-0 flex">
            <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1 transform transition">
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </TransitionChild>

              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#FFFFFF] px-6 pb-4">
                <div className="flex justify-center mt-2">
                  <Image
                    src="/Group 46194.svg"
                    alt="logo"
                    quality={50}
                    height={80}
                    width={80}
                    priority={true}
                  />
                </div>
                <NavigationList />
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-[#15223214] bg-[#FFFFFF] px-6 pb-4">
            <div className="flex justify-center mt-2">
              <Image
                src="/Group 46194.svg"
                alt="logo"
                quality={50}
                height={80}
                width={80}
                priority={true}
              />
            </div>
            <NavigationList />
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            <div className="flex flex-1 gap-x-4 lg:gap-x-6 items-center justify-between">
              <div className="flex items-center">
                <span className="text-[#000637] font-semibold text-sm">
                  {optionalTitle ? (
                    <span className="text-[#CAD3D5]">{optionalTitle} / </span>
                  ) : null}
                  {title}
                </span>
              </div>

            
              <div className="flex items-center gap-4">
               
                <div className="relative">
                  <Image
                    onClick={toggleDropdown}
                    src="/Notifications.svg"
                    alt="notifications"
                    height={24}
                    width={24}
                    quality={100}
                    className={`${onClickStyle} h-6 w-6 cursor-pointer`}
                  />
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-10">
                      <Notifications />
                    </div>
                  )}
                </div>

                {/* Profile Menu */}
                <Menu as="div" className="relative">
                  <MenuButton className="flex items-center p-1.5 gap-x-2">
                    <Image
                      src="/Oval@2x.png"
                      alt="profile"
                      height={32}
                      width={32}
                      quality={100}
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="hidden lg:flex items-center">
                      <span className="text-[13px] font-semibold text-[#252829]">
                        Jhon Doe
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="ml-2 h-5 w-5 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </MenuButton>

                  <MenuItems className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <MenuItem>
                      <Link
                        href={authNav.login.path}
                        className="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-50"
                      >
                        Sign out
                      </Link>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
