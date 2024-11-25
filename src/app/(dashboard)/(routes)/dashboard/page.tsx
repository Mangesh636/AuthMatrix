import { Heading } from "@/components/common/heading";
import { UsersCard } from "@/components/dashboard/users-card";
import { VerificationCard } from "@/components/dashboard/verification-card";

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <Heading
        label="Dashboard"
        className="text-3xl font-medium text-blue-600"
      />

      {/* Key Metrics */}
      <div>
        <Heading
          label="Key Metrics"
          className="mb-2 text-xl font-normal text-black"
        />
        <div className="flex flex-row gap-4 md:flex-row">
          {/* Active User Card */}
          <UsersCard />
          {/* Verified User Card */}
          <VerificationCard />
        </div>
      </div>
    </div>
  );
}
