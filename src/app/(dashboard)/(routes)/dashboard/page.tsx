import { Separator } from "@/components/ui/separator";

import { Heading } from "@/components/common/heading";
import { UserStatistics } from "@/components/dashboard/UserStatistics";
import { VerificationCard } from "@/components/dashboard/verification-card";

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <Heading
        label="Dashboard"
        className="text-3xl font-medium text-blue-600"
      />
      {/* Seperator */}
      <Separator className="h-0.5 rounded-full" />

      {/* Key Metrics */}
      <div className="flex flex-col gap-4">
        {/* UseStatistics Card */}
        <UserStatistics />
        {/* Verified User Card */}
        <VerificationCard />
      </div>
    </div>
  );
}
