import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800 font-[family-name:var(--font-geist-sans)]">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          🔐Auth
        </h1>
        <p className="font-[family-name:var(--font-geist-mono)] text-lg text-white">
          A Role-Based Access Control System
        </p>
        <Link
          href={"/login"}
          className={buttonVariants({ variant: "secondary", size: "lg" })}
        >
          Login
        </Link>
      </div>
    </div>
  );
}
