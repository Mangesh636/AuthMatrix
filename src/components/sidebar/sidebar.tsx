"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  RiDashboardLine,
  RiFilePaper2Line,
  RiGroupLine,
  RiLockStarLine,
  RiLogoutCircleRLine,
  RiSettings4Line,
  RiShieldKeyholeLine,
  RiShieldUserLine,
} from "react-icons/ri";

import { cn } from "@/lib/utils";
import { ActionBtn } from "../common/ActionBtn";

const SidebarRoutes = [
  {
    label: "Dashboard",
    icon: RiDashboardLine,
    href: "/dashboard",
  },
  {
    label: "Manage Users",
    icon: RiGroupLine,
    href: "/users",
  },
  {
    label: "Manage Roles",
    icon: RiShieldUserLine,
    href: "/roles",
  },
  {
    label: "Manage Permissions",
    icon: RiLockStarLine,
    href: "/permissions",
  },
  {
    label: "Activity Logs",
    icon: RiFilePaper2Line,
    href: "/logs",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex h-full flex-col space-y-4 bg-gray-100 py-4 text-black">
      <div className="flex-1 px-3 py-2">
        <Link
          href={"/dashboard"}
          className="mb-10 flex items-center pl-3 font-[family-name:var(--font-geist-sans)] text-3xl font-semibold text-blue-600"
        >
          <RiShieldKeyholeLine className="mr-3" />
          AuthMatrix
        </Link>
        <div className="space-y-2">
          {SidebarRoutes.map((index) => (
            <Link
              key={index.label}
              href={index.href}
              className={cn(
                "group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-blue-600/80 hover:text-white",
                pathname === index.href ? "bg-blue-600/80 text-white" : "",
              )}
            >
              <div className="flex flex-1 items-center">
                <index.icon className="mr-3 h-5 w-5" />
                {index.label}
              </div>
            </Link>
          ))}
        </div>

        {/* Settings & Logout */}
        <div className="absolute bottom-6 flex w-[90%] flex-col gap-y-3">
          <div
            className={cn(
              "rounded-lg p-3 text-base transition hover:bg-blue-600/80 hover:text-white",
              pathname === "/settings" ? "bg-blue-600/80 text-white" : "",
            )}
          >
            <Link href={"/settings"} className="flex flex-1 items-center">
              <RiSettings4Line className="mr-3 h-5 w-5" />
              Settings
            </Link>
          </div>
          <ActionBtn
            label="Logout"
            icon={RiLogoutCircleRLine}
            onClick={() => router.push("/")}
          />
        </div>
      </div>
    </div>
  );
};
