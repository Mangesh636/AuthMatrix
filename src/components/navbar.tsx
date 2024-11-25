import Link from "next/link";
import { RiShieldKeyholeLine } from "react-icons/ri";

import { MobileSidebar } from "./sidebar/mobile-sidebar";

export const Navbar = () => {
  return (
    <div className="flex items-center border-b px-4 py-2 md:border-none">
      <div className="flex w-full justify-start">
        <Link
          href={"/dashboard"}
          className="flex items-center pl-3 font-[family-name:var(--font-geist-sans)] text-2xl font-semibold text-blue-600 md:hidden"
        >
          <RiShieldKeyholeLine className="mr-3" />
          AuthMatrix
        </Link>
      </div>
      <MobileSidebar />
    </div>
  );
};
