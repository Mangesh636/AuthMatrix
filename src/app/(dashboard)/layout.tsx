import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <div className="z-[80] hidden h-full bg-gray-50 md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <Sidebar />
      </div>
      <main className="font-[family-name:var(--font-geist-mono)] md:pl-72">
        <Navbar />
        <div className="mx-4 my-2 overscroll-y-auto px-8 py-4">{children}</div>
      </main>
    </div>
  );
}
